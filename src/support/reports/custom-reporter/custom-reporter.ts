import WDIOReporter, { RunnerStats } from '@wdio/reporter';
import { Reporters } from '@wdio/types';
import SuitStats from '@wdio/reporter/build/stats/suite';
import { CUSTOM_REPORTER_CONFIG } from '../../../configs/custom-reporter-config';
import { createDir } from '../../files/create-dir';
import path from 'path';
import { writeFile } from '../../files/write-file';

export default class CustomReporter extends WDIOReporter {
   protected res: Array<any> = [];
   protected testKey: string = '';

   constructor(options: Partial<Reporters.Options>) {
      super(options);
   }

   protected getTestKey(suiteStats: SuitStats): string {
      const match = suiteStats.title.match(/CAR-\d*/);

      if (!match) {
         throw new Error(
            `Error in scenario: ${suiteStats.title}. Test issue id should be present in scenario title (e.g. [CAR-999] Scenario title)`,
         );
      }

      return match[0];
   }

   protected getScenarioStatus(suiteStats: SuitStats): 'FAILD' | 'PASSED' {
      return suiteStats.tests.find(test => test.state !== 'passed') ? 'FAILD' : 'PASSED';
   }

   public getComment(suiteStats: SuitStats, status: 'FAILD' | 'PASSED'): string {
      let comment = '';

      if (status === 'PASSED') {
         comment = 'AT - Successful execution';
      } else {
         const test = suiteStats.tests.find(t => t.state === 'failed');

         if (test && test.error) {
            comment = `Step: ${test.title}. Error: ${test.error.message}`;
         }
      }

      return comment;
   }

   protected writeToFile(json: any, cid: string): void {
      if (!this.options.outputDir) {
         throw new Error(`Cannot write json report: empty or invalid 'outputDir'`);
      }

      try {
         const dir = path.resolve(this.options.outputDir);
         const filename = CUSTOM_REPORTER_CONFIG.RUNNER_RES_PATTERN.replace('*', `${cid}.json`);
         const filepath = path.join(dir, filename);

         createDir(dir);
         writeFile(filepath, JSON.stringify(json));
      } catch (e: any) {
         throw new Error(`Failed to write json report to[${this.options.outputDir}]. Error: ${e.message}`);
      }
   }

   public onSuiteStart(suiteStats: SuitStats): void {
      if (suiteStats.type === 'scenario') {
         this.testKey = this.getTestKey(suiteStats);
      }
   }

   public onSuiteEnd(suiteStats: SuitStats): void {
      if (suiteStats.type === 'scenario') {
         const testKey = this.testKey;
         const status = this.getScenarioStatus(suiteStats);
         const comment = this.getComment(suiteStats, status);

         this.res.push({ testKey, status, comment });
      }
   }

   public onRunnerEnd(runnerStats: RunnerStats): void {
      this.writeToFile(this.res, runnerStats.cid);
   }
}

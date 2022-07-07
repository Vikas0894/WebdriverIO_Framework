"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxControl = void 0;
const assert_true_1 = require("../support/assert/assert-true");
const element_control_1 = require("./element-control");
class CheckboxControl extends element_control_1.ElementControl {
    async checkCheckbox() {
        if (!(await this.isChecked())) {
            await this.click();
        }
    }
    async uncheckCheckbox() {
        if (await this.isChecked()) {
            await this.click();
        }
    }
    async isChecked() {
        return (await this.getAttribute('aria-checked')) === 'true';
    }
    async assertSelected(selected) {
        switch (selected) {
            case 'is':
                (0, assert_true_1.assertTrue)(await this.isChecked(), 'Payment account option is not selected');
                break;
            case 'is not':
                (0, assert_true_1.assertTrue)(!(await this.isChecked()), 'Payment account option is selected');
                break;
            default:
                throw new Error('Unkown parm');
        }
    }
}
exports.CheckboxControl = CheckboxControl;
//# sourceMappingURL=checkbox-control.js.map
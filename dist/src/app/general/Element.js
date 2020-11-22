var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Model from "../utils/Model";
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    function Element(img, width, height) {
        return _super.call(this, img, width, height) || this;
    }
    return Element;
}(Model));
export default Element;
//# sourceMappingURL=Element.js.map
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author
 *
 */
var BaseFirstUI = (function (_super) {
    __extends(BaseFirstUI, _super);
    function BaseFirstUI() {
        var _this = _super.call(this) || this;
        _this.addChild(ViewUtil.getShape(GlobalData.GameStage_width, GlobalData.GameStage_height, 0x000000, 0));
        _this.anchorOffsetX = GlobalData.GameStage_width / 2;
        _this.anchorOffsetY = GlobalData.GameStage_height / 2;
        _this.verticalCenter = _this.horizontalCenter = 0;
        return _this;
    }
    return BaseFirstUI;
}(eui.Component));
__reflect(BaseFirstUI.prototype, "BaseFirstUI");

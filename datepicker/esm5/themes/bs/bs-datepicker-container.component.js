/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { BsDatepickerAbstractComponent } from '../../base/bs-datepicker-container';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { datepickerAnimation } from '../../datepicker-animations';
import { take } from 'rxjs/operators';
var BsDatepickerContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BsDatepickerContainerComponent, _super);
    function BsDatepickerContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
        var _this = _super.call(this) || this;
        _this._config = _config;
        _this._store = _store;
        _this._element = _element;
        _this._actions = _actions;
        _this._positionService = _positionService;
        _this.valueChange = new EventEmitter();
        _this.animationState = 'void';
        _this._subs = [];
        _this._effects = _effects;
        _this.customRangeBtnLbl = _this._config.customRangeButtonLabel;
        _renderer.setStyle(_element.nativeElement, 'display', 'block');
        _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
        return _this;
    }
    Object.defineProperty(BsDatepickerContainerComponent.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._positionService.setOptions({
            modifiers: { flip: { enabled: this._config.adaptivePosition } },
            allowedPositions: ['top', 'bottom']
        });
        this._positionService.event$
            .pipe(take(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._positionService.disable();
            if (_this._config.isAnimated) {
                _this.animationState = _this.isTopPosition ? 'animated-up' : 'animated-down';
                return;
            }
            _this.animationState = 'unanimated';
        }));
        this.showTodayBtn = this._config.showTodayButton;
        this.todayPos = this._config.todayPosition;
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this.containerClass = this._config.containerClass;
        this.showClearBtn = this._config.showClearButton;
        this.todayBtnLbl = this._config.todayButtonLabel;
        this.clearBtnLbl = this._config.clearButtonLabel;
        this.customRangeBtnLbl = this._config.customRangeButtonLabel;
        // this.showTodayBtn = this._config.showTodayButton;
        this._effects
            .init(this._store)
            // intial state options
            .setOptions(this._config)
            // data binding view --> model
            .setBindings(this)
            // set event handlers
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            /* tslint:disable-next-line: no-any */
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.selectedDate; }))
            /* tslint:disable-next-line: no-any */
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        function (date) { return _this.valueChange.emit(date); })));
    };
    Object.defineProperty(BsDatepickerContainerComponent.prototype, "isTopPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element.nativeElement.classList.contains('top');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.positionServiceEnable = /**
     * @return {?}
     */
    function () {
        this._positionService.enable();
    };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        /** @type {?} */
        var isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.select(day.date));
    };
    /**
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.setToday = /**
     * @return {?}
     */
    function () {
        this._store.dispatch(this._actions.select(new Date()));
    };
    /**
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.clearDate = /**
     * @return {?}
     */
    function () {
        this._store.dispatch(this._actions.select(null));
    };
    /**
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._effects.destroy();
    };
    BsDatepickerContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-datepicker-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n        <!--buttons section-->\n\n        <div class=\"bs-datepicker-buttons bs-datepicker-action-buttons\">\n\n          <div class=\"btn-today-wrapper\" *ngIf=\"showTodayBtn\">\n            <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\n          </div>\n\n          <div class=\"btn-clear-wrapper\" *ngIf=\"showClearBtn\">\n            <button class=\"btn btn-default\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\n           </div>\n\n\n  </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"  [customRangeLabel]=\"customRangeBtnLbl\"></bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        class: 'bottom',
                        '(click)': '_stopPropagation($event)',
                        role: 'dialog',
                        'aria-label': 'calendar'
                    },
                    animations: [datepickerAnimation]
                }] }
    ];
    /** @nocollapse */
    BsDatepickerContainerComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: BsDatepickerConfig },
        { type: BsDatepickerStore },
        { type: ElementRef },
        { type: BsDatepickerActions },
        { type: BsDatepickerEffects },
        { type: PositioningService }
    ]; };
    return BsDatepickerContainerComponent;
}(BsDatepickerAbstractComponent));
export { BsDatepickerContainerComponent };
if (false) {
    /** @type {?} */
    BsDatepickerContainerComponent.prototype.valueChange;
    /** @type {?} */
    BsDatepickerContainerComponent.prototype.animationState;
    /** @type {?} */
    BsDatepickerContainerComponent.prototype._subs;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerContainerComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerContainerComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerContainerComponent.prototype._element;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerContainerComponent.prototype._actions;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerContainerComponent.prototype._positionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsidGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QztJQVlvRCwwREFBNkI7SUFXL0Usd0NBQ0UsU0FBb0IsRUFDWixPQUEyQixFQUMzQixNQUF5QixFQUN6QixRQUFvQixFQUNwQixRQUE2QixFQUNyQyxRQUE2QixFQUNyQixnQkFBb0M7UUFQOUMsWUFTRSxpQkFBTyxTQU1SO1FBYlMsYUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsWUFBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsY0FBUSxHQUFSLFFBQVEsQ0FBWTtRQUNwQixjQUFRLEdBQVIsUUFBUSxDQUFxQjtRQUU3QixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBWDlDLGlC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OztJQUVELG9EQUFXOzs7SUFBWDs7O1lBQ0UsS0FBa0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxLQUFLLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXpCLElBQU0sR0FBRyxXQUFBO2dCQUNaLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQjs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkE5SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO29CQUNuRCx3NEZBQXdDO29CQUN4QyxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFFBQVE7d0JBQ2YsU0FBUyxFQUFFLDBCQUEwQjt3QkFDckMsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsWUFBWSxFQUFFLFVBQVU7cUJBQ3pCO29CQUNELFVBQVUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUNsQzs7OztnQkF6QmdFLFNBQVM7Z0JBR2pFLGtCQUFrQjtnQkFJbEIsaUJBQWlCO2dCQVBOLFVBQVU7Z0JBS3JCLG1CQUFtQjtnQkFDbkIsbUJBQW1CO2dCQUVuQixrQkFBa0I7O0lBcUkzQixxQ0FBQztDQUFBLEFBL0hELENBWW9ELDZCQUE2QixHQW1IaEY7U0FuSFksOEJBQThCOzs7SUFPekMscURBQTJEOztJQUMzRCx3REFBd0I7O0lBRXhCLCtDQUEyQjs7Ozs7SUFHekIsaURBQW1DOzs7OztJQUNuQyxnREFBaUM7Ozs7O0lBQ2pDLGtEQUE0Qjs7Ozs7SUFDNUIsa0RBQXFDOzs7OztJQUVyQywwREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYnMtZGF0ZXBpY2tlci1jb250YWluZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGF0ZXBpY2tlckFuaW1hdGlvbiB9IGZyb20gJy4uLy4uL2RhdGVwaWNrZXItYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1kYXRlcGlja2VyLWNvbnRhaW5lcicsXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JzLWRhdGVwaWNrZXItdmlldy5odG1sJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYm90dG9tJyxcbiAgICAnKGNsaWNrKSc6ICdfc3RvcFByb3BhZ2F0aW9uKCRldmVudCknLFxuICAgIHJvbGU6ICdkaWFsb2cnLFxuICAgICdhcmlhLWxhYmVsJzogJ2NhbGVuZGFyJ1xuICB9LFxuICBhbmltYXRpb25zOiBbZGF0ZXBpY2tlckFuaW1hdGlvbl1cbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuICBhbmltYXRpb25TdGF0ZSA9ICd2b2lkJztcblxuICBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgcHJpdmF0ZSBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfYWN0aW9uczogQnNEYXRlcGlja2VyQWN0aW9ucyxcbiAgICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0cyxcbiAgICBwcml2YXRlIF9wb3NpdGlvblNlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2VmZmVjdHMgPSBfZWZmZWN0cztcbiAgICB0aGlzLmN1c3RvbVJhbmdlQnRuTGJsID0gdGhpcy5fY29uZmlnLmN1c3RvbVJhbmdlQnV0dG9uTGFiZWw7XG5cbiAgICBfcmVuZGVyZXIuc2V0U3R5bGUoX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICBfcmVuZGVyZXIuc2V0U3R5bGUoX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2Uuc2V0T3B0aW9ucyh7XG4gICAgICBtb2RpZmllcnM6IHsgZmxpcDogeyBlbmFibGVkOiB0aGlzLl9jb25maWcuYWRhcHRpdmVQb3NpdGlvbiB9IH0sXG4gICAgICBhbGxvd2VkUG9zaXRpb25zOiBbJ3RvcCcsICdib3R0b20nXVxuICAgIH0pO1xuXG4gICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLmV2ZW50JFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2UuZGlzYWJsZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmlzVG9wUG9zaXRpb24gPyAnYW5pbWF0ZWQtdXAnIDogJ2FuaW1hdGVkLWRvd24nO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9ICd1bmFuaW1hdGVkJztcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNob3dUb2RheUJ0biA9IHRoaXMuX2NvbmZpZy5zaG93VG9kYXlCdXR0b247XG4gICAgICB0aGlzLnRvZGF5UG9zID0gdGhpcy5fY29uZmlnLnRvZGF5UG9zaXRpb247XG5cbiAgICB0aGlzLmlzT3RoZXJNb250aHNBY3RpdmUgPSB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGg7XG4gICAgdGhpcy5jb250YWluZXJDbGFzcyA9IHRoaXMuX2NvbmZpZy5jb250YWluZXJDbGFzcztcbiAgICB0aGlzLnNob3dDbGVhckJ0biA9IHRoaXMuX2NvbmZpZy5zaG93Q2xlYXJCdXR0b247XG4gICAgdGhpcy50b2RheUJ0bkxibCA9IHRoaXMuX2NvbmZpZy50b2RheUJ1dHRvbkxhYmVsO1xuICAgIHRoaXMuY2xlYXJCdG5MYmwgPSB0aGlzLl9jb25maWcuY2xlYXJCdXR0b25MYWJlbDtcbiAgICB0aGlzLmN1c3RvbVJhbmdlQnRuTGJsID0gdGhpcy5fY29uZmlnLmN1c3RvbVJhbmdlQnV0dG9uTGFiZWw7XG4gICAgLy8gdGhpcy5zaG93VG9kYXlCdG4gPSB0aGlzLl9jb25maWcuc2hvd1RvZGF5QnV0dG9uO1xuICAgIHRoaXMuX2VmZmVjdHNcbiAgICAgIC5pbml0KHRoaXMuX3N0b3JlKVxuICAgICAgLy8gaW50aWFsIHN0YXRlIG9wdGlvbnNcbiAgICAgIC5zZXRPcHRpb25zKHRoaXMuX2NvbmZpZylcbiAgICAgIC8vIGRhdGEgYmluZGluZyB2aWV3IC0tPiBtb2RlbFxuICAgICAgLnNldEJpbmRpbmdzKHRoaXMpXG4gICAgICAvLyBzZXQgZXZlbnQgaGFuZGxlcnNcbiAgICAgIC5zZXRFdmVudEhhbmRsZXJzKHRoaXMpXG4gICAgICAucmVnaXN0ZXJEYXRlcGlja2VyU2lkZUVmZmVjdHMoKTtcblxuICAgIC8vIHRvZG86IG1vdmUgaXQgc29tZXdoZXJlIGVsc2VcbiAgICAvLyBvbiBzZWxlY3RlZCBkYXRlIGNoYW5nZVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICAgIC5zZWxlY3QoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnNlbGVjdGVkRGF0ZSlcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgICAgLnN1YnNjcmliZSgoZGF0ZTogYW55KSA9PiB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZGF0ZSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBpc1RvcFBvc2l0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b3AnKTtcbiAgfVxuXG4gIHBvc2l0aW9uU2VydmljZUVuYWJsZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2UuZW5hYmxlKCk7XG4gIH1cblxuICBkYXlTZWxlY3RIYW5kbGVyKGRheTogRGF5Vmlld01vZGVsKTogdm9pZCB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IHRoaXMuaXNPdGhlck1vbnRoc0FjdGl2ZSA/IGRheS5pc0Rpc2FibGVkIDogKGRheS5pc090aGVyTW9udGggfHwgZGF5LmlzRGlzYWJsZWQpO1xuXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdChkYXkuZGF0ZSkpO1xuICB9XG5cblxuXG4gIHNldFRvZGF5KCk6IHZvaWQge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2VsZWN0KG5ldyBEYXRlKCkpKTtcbiAgfVxuXG4gIGNsZWFyRGF0ZSgpe1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2VsZWN0KG51bGwpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLl9lZmZlY3RzLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
BsDatepickerAbstractComponent = /** @class */ (function () {
    function BsDatepickerAbstractComponent() {
        this._customRangesFish = [];
    }
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMinDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMaxDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDaysDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDatesDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "dateCustomClasses", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDateCustomClasses(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.setViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.dayHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.weekHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.setToday = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.clearDate = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype._stopPropagation = /* tslint:disable-next-line: no-any */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    return BsDatepickerAbstractComponent;
}());
/**
 * @abstract
 */
export { BsDatepickerAbstractComponent };
if (false) {
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.containerClass;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.isOtherMonthsActive;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.showTodayBtn;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.showClearBtn;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype._effects;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype._customRangesFish;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.viewMode;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.daysCalendar;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.monthsCalendar;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.yearsCalendar;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJiYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFtQkE7Ozs7SUFBQTtRQVFFLHNCQUFpQixHQUFvQixFQUFFLENBQUM7SUF3RDFDLENBQUM7SUF0REMsc0JBQUksa0RBQU87Ozs7O1FBQVgsVUFBWSxLQUFXO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0RBQU87Ozs7O1FBQVgsVUFBWSxLQUFXO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksdURBQVk7Ozs7O1FBQWhCLFVBQWlCLEtBQWU7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx3REFBYTs7Ozs7UUFBakIsVUFBa0IsS0FBYTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscURBQVU7Ozs7O1FBQWQsVUFBZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNERBQWlCOzs7OztRQUFyQixVQUFzQixLQUFvQztZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQUFBOzs7OztJQVFELG1EQUFXOzs7O0lBQVgsVUFBWSxLQUEyQixJQUFTLENBQUM7Ozs7O0lBRWpELGtEQUFVOzs7O0lBQVYsVUFBVyxLQUF3QixJQUFTLENBQUM7Ozs7O0lBRTdDLHVEQUFlOzs7O0lBQWYsVUFBZ0IsS0FBcUIsSUFBUyxDQUFDOzs7OztJQUUvQyx3REFBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBb0IsSUFBUyxDQUFDOzs7OztJQUUvQyx5REFBaUI7Ozs7SUFBakIsVUFBa0IsS0FBcUIsSUFBUyxDQUFDOzs7O0lBRWhELGdEQUFROzs7SUFBUixjQUFrQixDQUFDOzs7O0lBRXBCLGlEQUFTOzs7SUFBVCxjQUFpQixDQUFDOzs7OztJQUVsQix3REFBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBcUIsSUFBUyxDQUFDOzs7OztJQUVoRCx3REFBZ0I7Ozs7SUFBaEIsVUFBaUIsR0FBaUIsSUFBUyxDQUFDOzs7OztJQUU1QywwREFBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBNEIsSUFBUyxDQUFDOzs7OztJQUV6RCx5REFBaUI7Ozs7SUFBakIsVUFBa0IsS0FBNEIsSUFBUyxDQUFDO0lBRXhELHNDQUFzQzs7Ozs7O0lBQ3RDLHdEQUFnQjs7Ozs7SUFBaEIsVUFBaUIsS0FBVTtRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNILG9DQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQzs7Ozs7OztJQS9EQyx1REFBdUI7O0lBQ3ZCLDREQUE2Qjs7SUFFN0IscURBQXNCOztJQUN0QixxREFBcUI7O0lBRXJCLGlEQUE4Qjs7SUFDOUIsMERBQXdDOztJQXdCeEMsaURBQTJDOztJQUMzQyxxREFBa0Q7O0lBQ2xELHVEQUFzRDs7SUFDdEQsc0RBQW9EOztJQUNwRCxnREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkYXRlcGlja2VyIGNvbnRhaW5lciBjb21wb25lbnRcbi8qIHRzbGludDpkaXNhYmxlOm5vLWVtcHR5ICovXG5pbXBvcnQgeyBCc0N1c3RvbURhdGVzIH0gZnJvbSAnLi4vdGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWwsXG4gIENlbGxIb3ZlckV2ZW50LFxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcbiAgRGF0ZXBpY2tlckRhdGVDdXN0b21DbGFzc2VzLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIERheVZpZXdNb2RlbCxcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIFdlZWtWaWV3TW9kZWwsXG4gIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IHtcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcbiAgaXNPdGhlck1vbnRoc0FjdGl2ZTogYm9vbGVhbjtcblxuICBzaG93VG9kYXlCdG46IGJvb2xlYW47XG4gIHNob3dDbGVhckJ0bjpib29sZWFuO1xuXG4gIF9lZmZlY3RzOiBCc0RhdGVwaWNrZXJFZmZlY3RzO1xuICBfY3VzdG9tUmFuZ2VzRmlzaDogQnNDdXN0b21EYXRlc1tdID0gW107XG5cbiAgc2V0IG1pbkRhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldE1pbkRhdGUodmFsdWUpO1xuICB9XG5cbiAgc2V0IG1heERhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldE1heERhdGUodmFsdWUpO1xuICB9XG4gIHNldCBkYXlzRGlzYWJsZWQodmFsdWU6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXREYXlzRGlzYWJsZWQodmFsdWUpO1xuICB9XG4gIHNldCBkYXRlc0Rpc2FibGVkKHZhbHVlOiBEYXRlW10pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldERhdGVzRGlzYWJsZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldERpc2FibGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldCBkYXRlQ3VzdG9tQ2xhc3Nlcyh2YWx1ZTogRGF0ZXBpY2tlckRhdGVDdXN0b21DbGFzc2VzW10pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldERhdGVDdXN0b21DbGFzc2VzKHZhbHVlKTtcbiAgfVxuXG4gIHZpZXdNb2RlOiBPYnNlcnZhYmxlPEJzRGF0ZXBpY2tlclZpZXdNb2RlPjtcbiAgZGF5c0NhbGVuZGFyOiBPYnNlcnZhYmxlPERheXNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgbW9udGhzQ2FsZW5kYXI6IE9ic2VydmFibGU8TW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIHllYXJzQ2FsZW5kYXI6IE9ic2VydmFibGU8WWVhcnNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgb3B0aW9uczogT2JzZXJ2YWJsZTxEYXRlcGlja2VyUmVuZGVyT3B0aW9ucz47XG5cbiAgc2V0Vmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7fVxuXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkV2ZW50KTogdm9pZCB7fVxuXG4gIGRheUhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XG5cbiAgd2Vla0hvdmVySGFuZGxlcihldmVudDogV2Vla1ZpZXdNb2RlbCk6IHZvaWQge31cblxuICBtb250aEhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XG5cbiAgIHNldFRvZGF5KCk6IHZvaWQge31cblxuICBjbGVhckRhdGUoKTp2b2lke31cblxuICB5ZWFySG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cblxuICBkYXlTZWxlY3RIYW5kbGVyKGRheTogRGF5Vmlld01vZGVsKTogdm9pZCB7fVxuXG4gIG1vbnRoU2VsZWN0SGFuZGxlcihldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCB7fVxuXG4gIHllYXJTZWxlY3RIYW5kbGVyKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkIHt9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgX3N0b3BQcm9wYWdhdGlvbihldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==
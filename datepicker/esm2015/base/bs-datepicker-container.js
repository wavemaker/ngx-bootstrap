/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class BsDatepickerAbstractComponent {
    constructor() {
        this._customRangesFish = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDate(value) {
        this._effects.setMinDate(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDate(value) {
        this._effects.setMaxDate(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set daysDisabled(value) {
        this._effects.setDaysDisabled(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set datesDisabled(value) {
        this._effects.setDatesDisabled(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDisabled(value) {
        this._effects.setDisabled(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dateCustomClasses(value) {
        this._effects.setDateCustomClasses(value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setViewMode(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    dayHoverHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    weekHoverHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    monthHoverHandler(event) { }
    /**
     * @return {?}
     */
    setToday() { }
    /**
     * @return {?}
     */
    clearDate() { }
    /**
     * @param {?} event
     * @return {?}
     */
    yearHoverHandler(event) { }
    /**
     * @param {?} day
     * @return {?}
     */
    daySelectHandler(day) { }
    /**
     * @param {?} event
     * @return {?}
     */
    monthSelectHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    yearSelectHandler(event) { }
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} event
     * @return {?}
     */
    _stopPropagation(event) {
        event.stopPropagation();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJiYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFtQkEsTUFBTSxPQUFnQiw2QkFBNkI7SUFBbkQ7UUFRRSxzQkFBaUIsR0FBb0IsRUFBRSxDQUFDO0lBd0QxQyxDQUFDOzs7OztJQXREQyxJQUFJLE9BQU8sQ0FBQyxLQUFXO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBVztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUNELElBQUksWUFBWSxDQUFDLEtBQWU7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxJQUFJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsSUFBSSxpQkFBaUIsQ0FBQyxLQUFvQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBUUQsV0FBVyxDQUFDLEtBQTJCLElBQVMsQ0FBQzs7Ozs7SUFFakQsVUFBVSxDQUFDLEtBQXdCLElBQVMsQ0FBQzs7Ozs7SUFFN0MsZUFBZSxDQUFDLEtBQXFCLElBQVMsQ0FBQzs7Ozs7SUFFL0MsZ0JBQWdCLENBQUMsS0FBb0IsSUFBUyxDQUFDOzs7OztJQUUvQyxpQkFBaUIsQ0FBQyxLQUFxQixJQUFTLENBQUM7Ozs7SUFFaEQsUUFBUSxLQUFVLENBQUM7Ozs7SUFFcEIsU0FBUyxLQUFRLENBQUM7Ozs7O0lBRWxCLGdCQUFnQixDQUFDLEtBQXFCLElBQVMsQ0FBQzs7Ozs7SUFFaEQsZ0JBQWdCLENBQUMsR0FBaUIsSUFBUyxDQUFDOzs7OztJQUU1QyxrQkFBa0IsQ0FBQyxLQUE0QixJQUFTLENBQUM7Ozs7O0lBRXpELGlCQUFpQixDQUFDLEtBQTRCLElBQVMsQ0FBQzs7Ozs7O0lBR3hELGdCQUFnQixDQUFDLEtBQVU7UUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FDRjs7O0lBL0RDLHVEQUF1Qjs7SUFDdkIsNERBQTZCOztJQUU3QixxREFBc0I7O0lBQ3RCLHFEQUFxQjs7SUFFckIsaURBQThCOztJQUM5QiwwREFBd0M7O0lBd0J4QyxpREFBMkM7O0lBQzNDLHFEQUFrRDs7SUFDbEQsdURBQXNEOztJQUN0RCxzREFBb0Q7O0lBQ3BELGdEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGRhdGVwaWNrZXIgY29udGFpbmVyIGNvbXBvbmVudFxuLyogdHNsaW50OmRpc2FibGU6bm8tZW1wdHkgKi9cbmltcG9ydCB7IEJzQ3VzdG9tRGF0ZXMgfSBmcm9tICcuLi90aGVtZXMvYnMvYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCxcbiAgQ2VsbEhvdmVyRXZlbnQsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXMsXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgRGF5Vmlld01vZGVsLFxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcbiAgV2Vla1ZpZXdNb2RlbCxcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQge1xuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xuICBpc090aGVyTW9udGhzQWN0aXZlOiBib29sZWFuO1xuXG4gIHNob3dUb2RheUJ0bjogYm9vbGVhbjtcbiAgc2hvd0NsZWFyQnRuOmJvb2xlYW47XG5cbiAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHM7XG4gIF9jdXN0b21SYW5nZXNGaXNoOiBCc0N1c3RvbURhdGVzW10gPSBbXTtcblxuICBzZXQgbWluRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0TWluRGF0ZSh2YWx1ZSk7XG4gIH1cblxuICBzZXQgbWF4RGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0TWF4RGF0ZSh2YWx1ZSk7XG4gIH1cbiAgc2V0IGRheXNEaXNhYmxlZCh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldERheXNEaXNhYmxlZCh2YWx1ZSk7XG4gIH1cbiAgc2V0IGRhdGVzRGlzYWJsZWQodmFsdWU6IERhdGVbXSkge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0RGF0ZXNEaXNhYmxlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXQgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0RGlzYWJsZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0IGRhdGVDdXN0b21DbGFzc2VzKHZhbHVlOiBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXNbXSkge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0RGF0ZUN1c3RvbUNsYXNzZXModmFsdWUpO1xuICB9XG5cbiAgdmlld01vZGU6IE9ic2VydmFibGU8QnNEYXRlcGlja2VyVmlld01vZGU+O1xuICBkYXlzQ2FsZW5kYXI6IE9ic2VydmFibGU8RGF5c0NhbGVuZGFyVmlld01vZGVsW10+O1xuICBtb250aHNDYWxlbmRhcjogT2JzZXJ2YWJsZTxNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgeWVhcnNDYWxlbmRhcjogT2JzZXJ2YWJsZTxZZWFyc0NhbGVuZGFyVmlld01vZGVsW10+O1xuICBvcHRpb25zOiBPYnNlcnZhYmxlPERhdGVwaWNrZXJSZW5kZXJPcHRpb25zPjtcblxuICBzZXRWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHt9XG5cbiAgbmF2aWdhdGVUbyhldmVudDogQnNOYXZpZ2F0aW9uRXZlbnQpOiB2b2lkIHt9XG5cbiAgZGF5SG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cblxuICB3ZWVrSG92ZXJIYW5kbGVyKGV2ZW50OiBXZWVrVmlld01vZGVsKTogdm9pZCB7fVxuXG4gIG1vbnRoSG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cblxuICAgc2V0VG9kYXkoKTogdm9pZCB7fVxuXG4gIGNsZWFyRGF0ZSgpOnZvaWR7fVxuXG4gIHllYXJIb3ZlckhhbmRsZXIoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCB7fVxuXG4gIGRheVNlbGVjdEhhbmRsZXIoZGF5OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHt9XG5cbiAgbW9udGhTZWxlY3RIYW5kbGVyKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkIHt9XG5cbiAgeWVhclNlbGVjdEhhbmRsZXIoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQge31cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBfc3RvcFByb3BhZ2F0aW9uKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19
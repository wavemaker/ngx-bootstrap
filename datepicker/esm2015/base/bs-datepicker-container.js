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
    clearDate() { }
    /**
     * @return {?}
     */
    setToday() { }
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
    BsDatepickerAbstractComponent.prototype.todayPos;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.showClearBtn;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.todayBtnLbl;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.customRangeBtnLbl;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.clearBtnLbl;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJiYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFtQkEsTUFBTSxPQUFnQiw2QkFBNkI7SUFBbkQ7UUFZRSxzQkFBaUIsR0FBb0IsRUFBRSxDQUFDO0lBd0QxQyxDQUFDOzs7OztJQXREQyxJQUFJLE9BQU8sQ0FBQyxLQUFXO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBVztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUNELElBQUksWUFBWSxDQUFDLEtBQWU7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxJQUFJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsSUFBSSxpQkFBaUIsQ0FBQyxLQUFvQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBUUQsV0FBVyxDQUFDLEtBQTJCLElBQVMsQ0FBQzs7Ozs7SUFFakQsVUFBVSxDQUFDLEtBQXdCLElBQVMsQ0FBQzs7Ozs7SUFFN0MsZUFBZSxDQUFDLEtBQXFCLElBQVMsQ0FBQzs7Ozs7SUFFL0MsZ0JBQWdCLENBQUMsS0FBb0IsSUFBUyxDQUFDOzs7OztJQUUvQyxpQkFBaUIsQ0FBQyxLQUFxQixJQUFTLENBQUM7Ozs7SUFFakQsU0FBUyxLQUFRLENBQUM7Ozs7SUFFbEIsUUFBUSxLQUFVLENBQUM7Ozs7O0lBRW5CLGdCQUFnQixDQUFDLEtBQXFCLElBQVMsQ0FBQzs7Ozs7SUFFaEQsZ0JBQWdCLENBQUMsR0FBaUIsSUFBUyxDQUFDOzs7OztJQUU1QyxrQkFBa0IsQ0FBQyxLQUE0QixJQUFTLENBQUM7Ozs7O0lBRXpELGlCQUFpQixDQUFDLEtBQTRCLElBQVMsQ0FBQzs7Ozs7O0lBR3hELGdCQUFnQixDQUFDLEtBQVU7UUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FDRjs7O0lBbkVDLHVEQUF1Qjs7SUFDdkIsNERBQTZCOztJQUU3QixxREFBc0I7O0lBQ3RCLGlEQUFpQjs7SUFDakIscURBQXFCOztJQUNyQixvREFBb0I7O0lBQ3BCLDBEQUEwQjs7SUFDMUIsb0RBQW9COztJQUVwQixpREFBOEI7O0lBQzlCLDBEQUF3Qzs7SUF3QnhDLGlEQUEyQzs7SUFDM0MscURBQWtEOztJQUNsRCx1REFBc0Q7O0lBQ3RELHNEQUFvRDs7SUFDcEQsZ0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZGF0ZXBpY2tlciBjb250YWluZXIgY29tcG9uZW50XG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby1lbXB0eSAqL1xuaW1wb3J0IHsgQnNDdXN0b21EYXRlcyB9IGZyb20gJy4uL3RoZW1lcy9icy9icy1jdXN0b20tZGF0ZXMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25FdmVudCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsLFxuICBDZWxsSG92ZXJFdmVudCxcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3NlcyxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWwsXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBXZWVrVmlld01vZGVsLFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB7XG4gIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XG4gIGlzT3RoZXJNb250aHNBY3RpdmU6IGJvb2xlYW47XG5cbiAgc2hvd1RvZGF5QnRuOiBib29sZWFuO1xuICB0b2RheVBvczogc3RyaW5nO1xuICBzaG93Q2xlYXJCdG46Ym9vbGVhbjtcbiAgdG9kYXlCdG5MYmw6IHN0cmluZztcbiAgY3VzdG9tUmFuZ2VCdG5MYmw6IHN0cmluZztcbiAgY2xlYXJCdG5MYmw6IHN0cmluZztcblxuICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0cztcbiAgX2N1c3RvbVJhbmdlc0Zpc2g6IEJzQ3VzdG9tRGF0ZXNbXSA9IFtdO1xuXG4gIHNldCBtaW5EYXRlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXRNaW5EYXRlKHZhbHVlKTtcbiAgfVxuXG4gIHNldCBtYXhEYXRlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXRNYXhEYXRlKHZhbHVlKTtcbiAgfVxuICBzZXQgZGF5c0Rpc2FibGVkKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0RGF5c0Rpc2FibGVkKHZhbHVlKTtcbiAgfVxuICBzZXQgZGF0ZXNEaXNhYmxlZCh2YWx1ZTogRGF0ZVtdKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXREYXRlc0Rpc2FibGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldCBpc0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXREaXNhYmxlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXQgZGF0ZUN1c3RvbUNsYXNzZXModmFsdWU6IERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3Nlc1tdKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXREYXRlQ3VzdG9tQ2xhc3Nlcyh2YWx1ZSk7XG4gIH1cblxuICB2aWV3TW9kZTogT2JzZXJ2YWJsZTxCc0RhdGVwaWNrZXJWaWV3TW9kZT47XG4gIGRheXNDYWxlbmRhcjogT2JzZXJ2YWJsZTxEYXlzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIG1vbnRoc0NhbGVuZGFyOiBPYnNlcnZhYmxlPE1vbnRoc0NhbGVuZGFyVmlld01vZGVsW10+O1xuICB5ZWFyc0NhbGVuZGFyOiBPYnNlcnZhYmxlPFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XG4gIG9wdGlvbnM6IE9ic2VydmFibGU8RGF0ZXBpY2tlclJlbmRlck9wdGlvbnM+O1xuXG4gIHNldFZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge31cblxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25FdmVudCk6IHZvaWQge31cblxuICBkYXlIb3ZlckhhbmRsZXIoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCB7fVxuXG4gIHdlZWtIb3ZlckhhbmRsZXIoZXZlbnQ6IFdlZWtWaWV3TW9kZWwpOiB2b2lkIHt9XG5cbiAgbW9udGhIb3ZlckhhbmRsZXIoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCB7fVxuXG4gIGNsZWFyRGF0ZSgpOnZvaWR7fVxuXG4gIHNldFRvZGF5KCk6IHZvaWQge31cblxuICB5ZWFySG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cblxuICBkYXlTZWxlY3RIYW5kbGVyKGRheTogRGF5Vmlld01vZGVsKTogdm9pZCB7fVxuXG4gIG1vbnRoU2VsZWN0SGFuZGxlcihldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCB7fVxuXG4gIHllYXJTZWxlY3RIYW5kbGVyKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkIHt9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgX3N0b3BQcm9wYWdhdGlvbihldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==
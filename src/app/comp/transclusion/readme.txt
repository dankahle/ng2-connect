transclusion

we mimic webcompnents now that have <ng-content select="selector1, selector2, ..."></ng-content>

<ng-content></ng-content> gets all the content whereas with selectors it only gets the
selected content. It only selects what's inside your components tags, doesn't see
outside of that.

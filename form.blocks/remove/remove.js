/**
 * Created on 06.04.2016.
 */
modules.define('remove', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $){

    provide(BEMDOM.decl(this.name,
    {
        /* Instance methods */
        onClick: function(e) {
            var that = this;
            var $REMOVED = $(e.target).closest('.remove');
            var $REMOVED_VAL = $REMOVED.find("input[type='hidden']").attr('value') || 'no-hidden-input-in-markup';
            var $REMOVED_TYPE = $REMOVED.find("input[type='hidden']").attr('data-id') || 'no-hidden-input-in-markup';
            var $PARENT = $REMOVED.parent();

            $REMOVED.remove();
            that.emit('removed', { item: $REMOVED, itemId: $REMOVED_VAL, itemIdType: $REMOVED_TYPE, itemParent: $PARENT });
        }
    },
    {
        /* Static methods */
        live: function() {
            this.liveBindTo('del', 'click', function(e) {
                this.onClick(e);
            });
        }
    }));

});

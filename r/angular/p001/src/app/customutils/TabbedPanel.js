function TabbedPanel() {

    var self = this;
    var configure = function() {
        $(document).on('click', 'a[data-prop^="tabAction"]', function(e) {
            e.preventDefault();
            var tabRoot = $(e.currentTarget).data('prop').split('-')[1];
            var index = ($(e.currentTarget).parent().index());
            $(e.currentTarget).addClass('executed');
            $('li').removeClass('active');
            $(e.currentTarget).parent().addClass('active');
            $('*[data-prop="tabContent-' + tabRoot + '"]').hide();
            $('*[data-prop="tabContent-' + tabRoot + '"]').eq(index).show();
            $('*[data-prop="tabContentHead-' + tabRoot + '"]').show();
            $('*[data-prop="tabContentHead-' + tabRoot + '"]').text($(e.currentTarget).text());
        });
        
        $('*[data-prop^="tabAction"]:first:not(.executed)').trigger('click');
        $('*[data-prop^="tabAction"]:first').addClass('executed');
    };

    configure();
}
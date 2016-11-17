(function ($) {

    Drupal.behaviors.hy_cookie_consent = {};

    Drupal.behaviors.hy_cookie_consent.attach = function (context, settings) {
        window.cookieconsent_options = settings.cookieconsent_options;
    };

})(jQuery);

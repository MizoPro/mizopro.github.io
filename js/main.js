/*!
 * 
 * MyPortfolio.JS
 * 
 * Author: MizoPro
 * 
 * Licensed under the Apache License 2.0
 * See <https://apache.org/licenses/LICENSE-2.0>
 * 
 * All rights are reserved®
 * 
 */

/**
 * @const {Array} TAGS My interests and skills
 * 
 */ 
var TAGS = window.TAGS = window.TAGS || [
    'programming', 'development', 'design', 'reading', 'drawing', 'python', 'C/C++', 'Java', 'JavaScript', 'HTML5/CSS3', 'ruby', 'go', 'C#', 'git', 'php', 'mathematics', 'algebra', 'cryptography', 'engineering'
];


/**
 * Main entry
 * 
 */
$(document).ready(function() {

    (function() {
        var ul = $('<ul></ul>');
        window.TAGS.forEach(function(tag) {
            var li = $('<li>' + tag + '</li>');
            li.click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (li.hasClass('active')) li.removeClass('active');
                else $('.js-tags li').removeClass('active') && li.addClass('active');
            });
            ul.append(li);
        });
        $('.js-tags').append(ul);
    })();

});
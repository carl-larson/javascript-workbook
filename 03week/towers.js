'use strict';
$(function() {

    let $block = null;
    // let $ring = null;

    $('.stack').click(function() {
        
        if ($block) {
            $(this).append($block);
            $block = null;
        } else {
            $block = $(this).children().last().detach();
            // $ring = $(this)
        }
    })





});

﻿/// <reference path="require.js" />
require(["string/stringer", "jquery"], function (stringer, $) {
    $(function init() {
        var div = document.createElement("div"),
        date = new Date(Date.now());

        div.textContent = stringer.FormatTrim(" Today is {0}/{1}/{2} ", date.getMonth() + 1, date.getDate(), date.getFullYear());
        $("#content").append(div);
    });
});
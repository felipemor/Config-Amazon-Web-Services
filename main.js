/** Copyright 2018 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
require(["jquery","fullcalendar","argumentNullError","initializer","languageOptions","customKoBindings","mapControl"],function($,a,b,c,d,e,f){$(document).ready(function(){if(!b)throw new Error("ArgumentNullError is null, empty or undefined.");if(!c)throw b.createInstance("initializer");if(!d)throw b.createInstance("languageOptions");c.getDOMRefs(),c.initialize(d)})});
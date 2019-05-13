
javascript: (function() {
    var APIKEY = "[API KEY]";
    var siteType = document.location.hostname;
    var siteTypeFull = window.location.toString();

    function callback() {
        (function($) {
            var jQuery = $;
            var imgURL = "";
            var imgID = "";
            var extType = ".jpg";
            var iid = document.createElement("imgIDanchor");
            iid.href = window.location.toString(); /*IG Vars*/
            var contentType = $('meta[name="medium"]').attr('content');
            var ogType = $('meta[property="og:type"]').attr('content');
            var theatreContentID = $('._22yr2').attr('data-reactid');
            var curLocation = window.location.toString();
            var theatreContentDecrypt;
            if (siteType.indexOf("tumblr.com") !== -1) {
                var imgArray = $(".lightbox-image").toArray();
                var imgArrayLength = imgArray.length; /*Tumblr*/
                imgID = iid.href.split(".")[0];
                imgID = imgID.split("/")[2];
                if (imgArrayLength == 2) {
                    var leftCss = parseInt($($('.lightbox-image-container')[0]).css("left"));
                    if (leftCss > 0) {
                        imgURL = $($(".lightbox-image")[0]).attr('src');
                        $($('.lightbox-image-container')[0]).click();
                        extType = ".jpg";
                        download();
                    } else if (leftCss < 0) {
                        imgURL = $($(".lightbox-image")[1]).attr('src');
                        extType = ".jpg";
                        download();
                    }
                } else {
                    var leftCss1 = parseInt($($('.lightbox-image-container')[0]).css("left"));
                    var leftCss2 = parseInt($($('.lightbox-image-container')[1]).css("left"));
                    var leftCss3 = parseInt($($('.lightbox-image-container')[2]).css("left"));
                    var leftCssArray = [leftCss1, leftCss2, leftCss3];
                    leftCssArray.sort(function(a, b) {
                        return a - b
                    });
                    if (leftCssArray[1] == leftCss1) {
                        imgURL = $($(".lightbox-image")[0]).attr('src');
                    } else if (leftCssArray[1] == leftCss2) {
                        imgURL = $($(".lightbox-image")[1]).attr('src');
                    } else if (leftCssArray[1] == leftCss3) {
                        imgURL = $($(".lightbox-image")[2]).attr('src');
                    }
                    $($('.lightbox-image-container')[1]).click();
                    extType = ".jpg";
                    download();
                    trackpost();
                }
            } else if (siteType.indexOf("instagram.com") !== -1) { /*Instagram*/ /*investigate this _2di5p _si7dy&*/
                if (curLocation.includes("/p/") == true) {
                    if ($('._4xng7') != null) {
                        imgURL = null;
                        if (imgURL == null) {
                            var multiImageIG = new Array();
                            var ylngrDiv = $('.YlNGR');
                            if ($('.YlNGR').length > 1) {
                                ylngrDiv = $('.YlNGR')[1];
                            }
                            $(ylngrDiv).find('._-1_m6').each( function() {
                                if ($(this).find('.FFVAD').attr("src")) {
                                    multiImageIG.push($(this).find('.FFVAD').attr("src"));
                                } else if ($(this).find('.tWeCl').attr("src")) {
                                    multiImageIG.push($(this).find('.tWeCl').attr("src"));
                                } else {
                                    multiImageIG.push("placeholder");
                                }
                            });
                            if (multiImageIG.length == 1){
                                imgURL = multiImageIG[0];
                            } else if (multiImageIG.length > 1){
                                var multiImageIGCounter = new Array();
                                $('.JSZAJ._3eoV-.IjCL9.WXPwG').find('.Yi5aA').each( function() {
                                    multiImageIGCounter.push($(this).attr("class"));
                                });
                                for (var i = 0; i < multiImageIGCounter.length; i++){
                                    if (multiImageIGCounter[i].includes("XCodT")){
                                        imgURL = multiImageIG[i];
                                        while (!imgURL){
                                            imgURL = multiImageIG[i--];
                                        }
                                    }
                                }

                            }
                            console.log("IG:1");
                        }
                        if (imgURL == null) {
                            imgURL = $('.eLAPa._23QFA').find('.FFVAD ').attr("src");
                            console.log("IG:2");
                        }  /*Videos*/
                        if (imgURL == null) {
                            imgURL = $('.GRtmf.wymO0').find('.tWeCl ').attr("src");
                            extType = ".mp4"; /*console.log("1");*/
                            download();
                        } else {
                            extType = ".jpg"; /*console.log("2");*/
                            download();
                        }
                    } else if ($('._4xng7') == null) {
                        if (contentType == "video") {
                            imgURL = $('meta[property="og:video"]').attr('content');
                            extType = ".mp4"; /*console.log("3");*/
                        } else {
                            imgURL = $('meta[property="og:image"]').attr('content');
                            extType = ".jpg"; /*console.log("4");*/
                        }
                        download();
                    } else {
                        console.log("Incompatible Page");
                    }
                } else if (curLocation == "https://www.instagram.com/" || curLocation == "http://www.instagram.com/") {
                    var imgFrontArray = $('._2di5p').toArray();
                    var top = $(window).scrollTop();
                    var viewportHeight = $(window).height();
                    var bottom = top + viewportHeight;
                    var sucs = $.grep(Object.keys(imgFrontArray), function(k) {
                        var imgPos = imgFrontArray[k].getBoundingClientRect();
                        return (imgPos.top + top > top && imgPos.top + top < bottom);
                    });
                    var arrayImgId = sucs[0];
                    console.log(arrayImgId);
                    if (arrayImgId !== undefined) {
                        imgURL = $($('._2di5p')[arrayImgId]).attr("src");
                        extType = ".jpg";
                        download();
                    } else {
                        imgFrontArray = $('._l6uaz').toArray();
                        top = $(window).scrollTop();
                        viewportHeight = $(window).height();
                        bottom = top + viewportHeight;
                        sucs = $.grep(Object.keys(imgFrontArray), function(k) {
                            var imgPos = imgFrontArray[k].getBoundingClientRect();
                            return (imgPos.top + top > top && imgPos.top + top < bottom);
                        });
                        arrayImgId = sucs[0];
                        if (arrayImgId !== undefined) {
                            imgURL = $($('._l6uaz')[arrayImgId]).attr("src");
                            extType = ".mp4";
                            download();
                        }
                    }
                }
            } else if (siteType.indexOf("sggirls.com") !== -1) { /*SgGirls*/
                if (siteTypeFull.indexOf("photos_display") !== -1) {
                    var findIFrames = $("iframe").toArray();
                    var findIFramesMax = findIFrames.length;
                    var correctIFrame;
                    for (var i = 0; i < findIFramesMax; i++) {
                        var pcSrc = $($("iframe")[i]).attr("src");
                        if (pcSrc.indexOf("http://sggirls.com/sg_photos_display.php?") !== -1) {
                            correctIFrame = i;
                        }
                    }
                    var iframewindow = $(frames[correctIFrame].window.document).contents().find("body");
                    var findNew = iframewindow.find(".photo-cell");
                    var imgArray = findNew.toArray();
                    var imgMax = imgArray.length;
                    console.log("Grid Page - SG Girls");
                    for (var i = 0; i < imgMax; i++) {
                        var curImg = $(findNew[i]).find("img");
                        var curImgSrc = curImg.attr("src");
                        curImgSrc = curImgSrc.replace("_tn", "");
                        var curImgIDFull = curImgSrc.replace(".jpg", "");
                        var curImgIDLength = curImgIDFull.length;
                        var curImgID = curImgIDFull.substr(curImgIDLength - 8, curImgIDLength);
                        imgID = curImgID;
                        imgURL = curImgSrc;
                        extType = ".jpg";
                        download(); /* var pageNav = $(".window-pages").find("a"); var imgArray = pageNav.toArray(); var imgMax = imgArray.length; pageNav[0].click() */
                    }
                } else if (siteTypeFull.indexOf("sg_photo_display.php?") !== -1) {
                    var imgArray = $(".photo").toArray();
                    var imgMax = imgArray.length;
                    console.log("Photo Page - SG Girls");
                    for (var i = 0; i < imgMax; i++) {
                        var curImgIDLength = siteTypeFull.length;
                        var curImgID = siteTypeFull.substr(curImgIDLength - 6, curImgIDLength);
                        var curImg = $($(".photo")[i]).find("img");
                        var curImgSrc = curImg.attr("src");
                        imgURL = curImgSrc;
                        imgID = curImgID;
                        extType = ".jpg";
                        download();
                    }
                }
            } else if (siteType.indexOf("danbooru.donmai.us") !== -1) { /*Danbooru*/
                if (siteTypeFull.indexOf("danbooru.donmai.us/posts/") !== -1) {
                    imgURL = "http://danbooru.donmai.us" + $('#image').attr('src');
                    extType = ".jpg";
                    download();
                } else if (siteTypeFull.indexOf("danbooru.donmai.us/posts") !== -1) {
                    var imgArray = $(".post-preview").toArray();
                    var imgMax = imgArray.length;
                    for (var i = 0; i < imgMax; i++) {
                        var curImgSrc = $($(".post-preview")[i]).attr("data-md5");
                        extType = "." + $($(".post-preview")[i]).attr("data-file-ext");
                        imgURL = "/data/" + curImgSrc + extType;
                        imgID = curImgSrc;
                        download();
                    }
                }
            } else if (siteType.indexOf("safebooru.donmai.us") !== -1) { /*Danbooru*/
                if (siteTypeFull.indexOf("safebooru.donmai.us/posts/") !== -1) {
                    imgURL = "http://safebooru.donmai.us" + $('#image').attr('src');
                    extType = ".jpg";
                    download();
                } else if (siteTypeFull.indexOf("safebooru.donmai.us/posts") !== -1) {
                    var imgArray = $(".post-preview").toArray();
                    var imgMax = imgArray.length;
                    for (var i = 0; i < imgMax; i++) {
                        var curImgSrc = $($(".post-preview")[i]).attr("data-md5");
                        extType = "." + $($(".post-preview")[i]).attr("data-file-ext");
                        imgURL = "/data/" + curImgSrc + extType;
                        imgID = curImgSrc;
                        download();
                    }
                }
            }

            function download() {
                console.log("1 URL: " + imgURL);
                var downloadKey = APIKEY;
                var objectKey = "";
                var jqxhr = $.post("https://api.zlux.us/fileproxy.php", {
                    key: downloadKey,
                    process: "store",
                    file: imgURL
                }, function(json) {
                    objectKey = json.response;
                    returnCode = json.code;
                    if (returnCode == "00") { /*window.location.href = "https://api.zlux.us/fileproxy.php?object=" + objectKey, "_blank";*/
                        console.log("Downloaded from " + siteType + ": " + imgID);
                    } else {
                        console.log("Error " + returnCode + ", " + objectKey);
                    }
                }, "json");
            } 
        })(jQuery.noConflict(true))
    }
    if (siteType.indexOf("twitter.com") !== -1) {
        imgURL = $('.media-image').attr('src');
        imgURL = imgURL.replace(":large", "");
        extType = ".jpg";
        var downLink = $("<a>");
        downLink.attr("href", imgURL);
        downLink.attr("id", imgID);
        downLink.attr("download", siteType + extType);
        downLink.appendTo("body");
        downLink[0].click();
        downLink.remove();
        console.log("Downloaded from " + siteType);
    } else if (siteType.indexOf("instagram.com") !== -1) {
        /*due to Cross-Origin Rules on instagram's pages, we are forced to use vanilla JS as we can't import JQuery.*/
        var curLocation = window.location.toString();
        if (curLocation.includes("/p/") == true) {
            /*on profile/media page*/
            if (document.querySelector(".eLAPa.kPFhm") == null){
                /*video*/
                imgURL = document.querySelector(".GRtmf.wymO0 ").querySelector("video").attributes['src'].value;
            } else {
                /*image*/
                imgURL = document.querySelector(".eLAPa.kPFhm").querySelector(".KL4Bh").querySelector("img").attributes['src'].value;
            }
        }
        /*due to COR, we have to send data to the endpoint via a new tab. This can get annoying but it's the only way we can bypass COR for now.*/
        function secureCORStore() {
            var downloadKey = APIKEY;
            var objectKey = "";
            var fpProcess = "silent_store";
            console.log("process="+fpProcess+"&key="+downloadKey+"&file="+imgURL);
            /*window.open = "https://api.zlux.us/ins_fileproxy.php?process="+fpProcess+"&key="+downloadKey+"&file="+imgURL;*/

            var postdata = {
                process: fpProcess,
                key: downloadKey,
                file: imgURL
            }

            var form = document.createElement("form");
            form.target = "_blank";
            form.method = "POST";
            form.action = "https://api.zlux.us/fileproxy.php";
            form.style.display = "none";

            for (var key in postdata) {
                var input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = postdata[key];
                form.appendChild(input);
            }

            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
        }

        function insecureCORStore() {
            var downloadKey = APIKEY;
            var objectKey = "";
            var fpProcess = "store";
            console.log("process="+fpProcess+"&key="+downloadKey+"&file="+imgURL);
            window.open("https://api.zlux.us/ins_fileproxy.php?process="+fpProcess+"&key="+downloadKey+"&file="+imgURL, "_blank");
        }

        function insecureCORDownload() {
            var downloadKey = APIKEY;
            var objectKey = "";
            var fpProcess = "store_download";
            console.log("process="+fpProcess+"&key="+downloadKey+"&file="+imgURL);
            window.location.href = "https://api.zlux.us/ins_fileproxy.php?process="+fpProcess+"&key="+downloadKey+"&file="+imgURL, "_blank";
        }
        if (imgURL != null) {
            secureCORStore();
        }
    } else {
        var s = document.createElement("script");
        s.src = "https://code.jquery.com/jquery-3.1.1.min.js";
        if (s.addEventListener) {
            s.addEventListener("load", callback, false)
        } else if (s.readyState) {
            s.onreadystatechange = callback
        }
        document.body.appendChild(s);
    }
})()
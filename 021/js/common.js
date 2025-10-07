    var commonEvent = {
        // 例 510,085.00
        commonNumber: function(digit){
            var num_arr=[];
            for(var i = digit.length-1;i>=0;i--){
                num_arr.push(digit.charAt(i));
            }
            return num_arr;
        },
        commonDom: function(arr){
            var str = '';
            for(var i = 0;i<arr.length;i++){
                if(parseInt(arr[i])>=0){
                    str += '<div class="data_value_container" data-show='+arr[i]+'>\
                  <span>0</span>\
                  <span>1</span>\
                  <span>2</span>\
                  <span>3</span>\
                  <span>4</span>\
                  <span>5</span>\
                  <span>6</span>\
                  <span>7</span>\
                  <span>8</span>\
                  <span>9</span>\
                </div>';
                }else if(arr[i]=="."){
                    str += '<div class="data_special_container_dian"><span>'+arr[i]+'</span></div>';
                }else if(arr[i]=="%"){
                    str += '<div class="data_special_container_baifenhao"><span>'+arr[i]+'</span></div>';
                }else {
                    str += '<div class="data_special_container_baifenhao"><span>'+arr[i]+'</span></div>';
                }
            }
            return str;
        },
        commonAnimation: function(parentClass,className){
            var height = $("."+parentClass).height();
            $("."+className).each(function(i){
                var num = parseInt($(this).data("show"));
                var scrollTop = 0;
                var scrollTop = height * num;
                $(this).css("margin-top",0);
                $(this).animate({marginTop: -scrollTop},1500);
            });
        }
    };
    // var final_arr = Event.number('1.456%');
    // $(".js-box").html(Event.dom(final_arr));
    // Event.animation("js-l-box");
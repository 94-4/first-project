let myslideer = $(".myslide-2")
myslideer .owlcarousel ({
    loop:true ,
    autoplay :false ,
    rtl:true ,
    nav :false,
    dots:false ,
    responsive :{
        0:{
            items:1
        },
        576: {
            items:3
        },
        992: {
            items:5
        },
        1200 : {
            items:8
        }
    }

})

$("#prevbtn").click =function() {
    myslideer.trigger("prev.owl.carousel")
}
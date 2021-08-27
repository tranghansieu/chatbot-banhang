require("dotenv").config();
import request from "request";
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const IMAGE_GET_STARTED = "bit.ly/sieu-chatbot2";
const URL_WEB_VIEW_ORDER = "https://chatbot-demo-siz.herokuapp.com/reserve-table";
let callSendAPI = (sender_psid, response) => {
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "message": response
    }

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": "https://graph.facebook.com/v11.0/me/messages",
        "qs": { "access_token": PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        console.log(body)
        if (!err) {
            console.log('message sent!')
        } else {
            console.error("Unable to send message:" + err);
        }
    });
}
let handleGetStarted = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response1 = { "text": "Chúc một ngày tốt lành. Chúng tôi có thể giúp gì cho bạn. " }


            let response2 = getStartedTemplate();
            await callSendAPI(sender_psid, response1);
            //
            await callSendAPI(sender_psid, response2);
            resolve('done');
        } catch (e) {
            reject(e);
        }
    })
}
let getStartedTemplate = () => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Các Mẫu Shop Đang Kinh Doanh",
                    "subtitle": "Hãy lựa chọn các mẫu có dưới đây.",
                    "image_url": "https://i.pinimg.com/originals/2a/ee/df/2aeedf26a151161f6cf57e66801274bd.jpg",
                    "buttons": [
                        {
                            "type": "postback",
                            "title": "Xem Mẫu",
                            "payload": "LIST PRODUCT",
                        },
                        {
                            "type": "web_url",
                            "title": "Cách chọn size",
                            "url": "https://quantrimang.com/huong-dan-chon-size-giay-chuan-voi-moi-doi-chan-165577",
                            "webview_height_ratio": "tall",

                        },

                    ],
                }]
            }
        }
    }
    return response;
}
let handleSendList = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {



            let response1 = getListProductTemplate();
            await callSendAPI(sender_psid, response1);
            //

            resolve('done');
        } catch (e) {
            reject(e);
        }
    })

}
let getListProductTemplate = () => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Các Mẫu Giày Nike",
                    "subtitle": "Hãy lựa chọn các mẫu có dưới đây.",
                    "image_url": IMAGE_GET_STARTED,
                    "buttons": [
                        {
                            "type": "postback",
                            "title": "Xem Giày",
                            "payload": "NIKE",
                        },

                    ],
                },
                {
                    "title": "Các Mẫu Giày Converse",
                    "subtitle": "Hãy lựa chọn các mẫu có dưới đây.",
                    "image_url": "https://www.elleman.vn/wp-content/uploads/2018/09/22/logo-thuong-hieu-converse-elle-man-feature.jpg",
                    "buttons": [
                        {
                            "type": "postback",
                            "title": "Xem Giày",
                            "payload": "CONVERSE",
                        },

                    ],
                },
                {
                    "title": "Các Mẫu Giày Vans",
                    "subtitle": "Hãy lựa chọn các mẫu có dưới đây.",
                    "image_url": "https://muahohangnhat.net/wp-content/uploads/2020/08/thuong-hieu-logo-vans-elle-man-feature.jpg",
                    "buttons": [
                        {
                            "type": "postback",
                            "title": "Xem Giày",
                            "payload": "VANS",
                        },

                    ],
                },






                ]
            }
        }
    }
    return response;
}
let handleSendListNike = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {



            let response1 = getListProductNikeTemplate();
            await callSendAPI(sender_psid, response1);
            //

            resolve('done');
        } catch (e) {
            reject(e);
        }
    })

}
let getListProductNikeTemplate = () => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Nike Air Jordan 1 Low",
                    "subtitle": "Mã NIKE_1 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2021/06/Jordan-1-Low-Laser-Blue-Replica-800x600.jpeg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"


                        },

                    ],
                },
                {
                    "title": "Nike Air Jordan 1 Low",
                    "subtitle": "Mã NIKE_2 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2020/11/jordan-1-low-light-smoke-grey-800x600.jpg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"

                        },

                    ],
                },
                {
                    "title": "Nike Air Jordan 1 Low",
                    "subtitle": "Mã NIKE_3 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2020/12/Jordan-1-Low-White-Camo-800x600.jpg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"
                        },

                    ],
                },
                {
                    "title": "Nike Air Jordan 1 Low",
                    "subtitle": "Mã NIKE_4 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2020/08/jordan-cam-800x600.jpg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"

                        },

                    ],
                },
                {
                    "title": "Nike Air Jordan 1 Low",
                    "subtitle": "Mã NIKE_5 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2020/08/Giay-nike-air-jordan-1-low-gym-red-800x600.jpg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"

                        },

                    ],
                },
                {
                    "title": "Nike Air Jordan 1 Low",
                    "subtitle": "Mã NIKE_6 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2021/04/Jordan-1-Retro-Low-OG-SP-Travis-Scott-800x600.jpg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"

                        },

                    ],
                },
                {
                    "title": "Nike Air Jordan 1 Low",
                    "subtitle": "Mã NIKE_7 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2020/09/Air-Jordan-1-Low-White-Black-Mystic-Green-replica-800x600.jpg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"
                        },

                    ],
                },




                ]
            }
        }
    }
    return response;
}
let handleSendListConverse = (sender_psid) => {

    return new Promise(async (resolve, reject) => {
        try {



            let response1 = getListProductConverseTemplate();
            await callSendAPI(sender_psid, response1);
            //

            resolve('done');
        } catch (e) {
            reject(e);
        }
    })

}
let getListProductConverseTemplate = () => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Converse Chuck Taylor 1970s",
                    "subtitle": "Mã CONVERSE_1 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Converse-Chuck-Taylor-1970s-High-Fear-Of-God-Black-Natural-Replica8-800x600.jpg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"

                        },

                    ],
                },
                {
                    "title": "Converse Chuck Taylor 1970s",
                    "subtitle": "Mã COVERSE_2 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2019/07/converse-1970s-navy-high-replica-800x600.jpg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"

                        },

                    ],
                },
                {
                    "title": "Converse Chuck Taylor 1970s",
                    "subtitle": "Mã COVERSE_3 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2020/07/Giay-Converse-Chuck-Taylor-1970s-High-Fear-of-God-Natural-Replica-2-800x600.jpeg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"

                        },

                    ],
                },
                {
                    "title": "Converse Chuck Taylor 1970s",
                    "subtitle": "Mã COVERSE_4 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2018/11/converse-chuck-1970s-high-yellow-replica-800x600.jpeg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"

                        },

                    ],
                },

                ]
            }
        }
    }
    return response;
}
let handleSendListVans = (sender_psid) => {

    return new Promise(async (resolve, reject) => {
        try {



            let response1 = getListProductVansTemplate();
            await callSendAPI(sender_psid, response1);
            //

            resolve('done');
        } catch (e) {
            reject(e);
        }
    })

}
let getListProductVansTemplate = () => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Vans Vault Old Skool Black White",
                    "subtitle": "Mã VANS_1 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2020/05/vans-vault-old-skool-black-white-replica-800x600.jpeg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"

                        },

                    ],
                },
                {
                    "title": "Vans Vault Old Skool Blue",
                    "subtitle": "Mã VANS_2 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_599/https://shopgiayreplica.com/wp-content/uploads/2019/05/giay-vans-old-skool-trang-soc-xanh-replica-800x599.jpg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"

                        },

                    ],
                },
                {
                    "title": "Vans Vault OG Classic Slip-On LX Checkerboard",
                    "subtitle": "Mã VANS_3 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2019/03/vans-vault-checkerbroad-og-replica-800x600.jpg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"

                        },

                    ],
                },
                {
                    "title": "Vans Classic Slip On Fear of God",
                    "subtitle": "Mã VANS_4 Giá: 450.000",
                    "image_url": "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_800,h_600/https://shopgiayreplica.com/wp-content/uploads/2018/11/vans-fear-of-god-replica-800x600.jpg",
                    "buttons": [
                        {
                            "type": "web_url",
                            "title": "Đặt hàng",
                            "url": "https://chatbot-demo-siz.herokuapp.com/reserve-table",
                            "webview_height_ratio": "full"

                        },

                    ],
                },

                ]
            }
        }
    }
    return response;
}
module.exports = {
    handleGetStarted: handleGetStarted,
    handleSendList: handleSendList,
    handleSendListNike: handleSendListNike,
    handleSendListConverse: handleSendListConverse,
    handleSendListVans: handleSendListVans,
}
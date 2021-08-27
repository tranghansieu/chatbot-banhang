require("dotenv").config();
import { response } from "express";
import request from "request";
import chatbotSevices from "../services/chatbotSevices";
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
const URL_WEB_VIEW_ORDER = "https://chatbot-demo-siz.herokuapp.com/reserve-table";
let getHomePage = (req, res) => {
  return res.render('homepage.ejs');
};
let postWebhook = (req, res) => {
  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function (entry) {

      // Gets the body of the webhook event
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);


      // Get the sender PSID
      let sender_psid = webhook_event.sender.id;
      console.log('Sender PSID: ' + sender_psid);

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function     
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);
      } else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
      }
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
};
let getWebhook = (req, res) => {
  // Your verify token. Should be a random string.


  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {

    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {

      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);

    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
};
function handleMessage(sender_psid, received_message) {
  let response;
  switch (received_message.text) {
    //---------------------------------------------------------------------------------
    //CÁC CÂU CHÀO
    case 'Cho mình hỏi':
    case 'cho mình hỏi':
    case 'hi':
    case 'Hi':
    case 'hello':
    case 'Hello':
    case 'Hello bạn':
    case 'Hello ban':
    case 'xin chao':
    case 'xin chào':
    case 'Xin chào':
    case 'chào bạn':
    case 'chao ban':
    case 'Chào anh cho em hỏi với ạ':
    case 'chào anh cho em hỏi với ạ':
    case 'chào anh cho em hỏi ':
    case 'chào anh cho em hỏi ':
    case 'shop ơi ':
    case 'Shop ơi ':
    case 'Shop ơi cho em hỏi với':
    case 'shop ơi cho em hỏi với':
    case 'alo':
    case 'Alo':
    case 'shop ơi':
    case 'anh ơi':
    case 'bạn ơi':
    case 'cho mình hỏi với':
    case 'chào shop':
    case 'Chào shop':

      response = { "text": "Hi chào bạn. Mình giúp được gì cho bạn " }
      // code block
      break;
    //---------------------------------------------------------------------------------
    //CÁC CÂU CHỐT ĐƠN

    case 'mua giày':
    case 'em lấy đôi này':
    case 'bán giày em với':
    case 'em mua đôi này':
    case 'bán cho em đôi giày':
    case 'em mua đôi nike này':
    case 'em mua đôi converse này':
    case 'bán cho em đôi nike':

    case 'mình còn mẫu này không':
    case 'có đôi này không':
    case 'còn đôi này không ':
    case 'em mua đôi này':
    case 'mình mau đôi này':
    case 'chị mua đôi này':
    case 'anh mua đôi này':
    case 'lấy anh đôi này':
    case 'lấy chị đôi này':
    case 'lấy em đôi này':
    case 'mình có bán giày không':
    case 'Có mẫu này không':
    case 'Mình còn mẫu này không':
    case 'Còn mẫu này không':
    case 'Bán giày':
    case 'Mua giày':
    case 'Em lấy đôi này':
    case 'Bán giày em với':
    case 'Em mua đôi này':
    case 'Bán cho em đôi giày':
    case 'Em mua đôi nike này':
    case 'Em mua đôi converse này':
    case 'Bán cho em đôi nike':
    case 'Mình còn mẫu này không':
    case 'Có đôi này không':
    case 'Còn đôi này không ':
    case 'Em mua đôi này':
    case 'Mình mau đôi này':
    case 'Chị mua đôi này':
    case 'Anh mua đôi này':
    case 'Lấy anh đôi này':
    case 'Lấy chị đôi này':
    case 'Lấy em đôi này':
    case 'cho mình xem mẫu nike':
    case 'Cho mình xem mẫu nike':
    case 'lấy mẫu nike':
    case 'xem mẫu nike':
    case 'mẫu nike':
    case 'nike':
    case 'Lấy mẫu nike':
    case 'Xem mẫu nike':
    case 'Mẫu nike':
    case 'Nike':
    case 'cho mình xem mẫu converse':
    case 'Cho mình xem mẫu converse':
    case 'lấy mẫu converse':
    case 'xem mẫu converse':
    case 'mẫu converse':
    case 'converse':
    case 'Lấy mẫu converse':
    case 'Xem mẫu converse':
    case 'Mẫu converse':
    case 'Converse':
    case 'cho mình xem mẫu vans':
    case 'Cho mình xem mẫu vans':
    case 'lấy mẫu vans':
    case 'xem mẫuvans':
    case 'mẫu vans':
    case 'vans':
    case 'Lấy mẫu vans':
    case 'Xem mẫu vans':
    case 'Mẫu vans':
    case 'Vans':
    case 'mình muốn mua giày nike':
    case 'Mình muốn mua giày nike':
    case 'mình muốn mua giày converse':
    case 'Mình muốn mua giày converse':
    case 'mình muốn mua giày vans':
    case 'Mình muốn mua giày vans':
    case '':
    case '':
    case '':
    case '':
    case '':
    case '':
      response = { "text": "Bạn có thể cho mình biết bạn đi size bao nhiêu không ạ" }
      // code block
      break;
    //---------------------------------------------------------------------------------
    //CÁC CÂU HỎI SIZE
    case '35':
    case '36':
    case '37':
    case '38':
    case '39':
    case '40':
    case '41':
    case '42':
    case '43':
    case 'mình mặc size 35':
    case 'mình mặc size 36':
    case 'mình mặc size 37':
    case 'mình mặc size 38':
    case 'mình mặc size 39':
    case 'mình mặc size 40':
    case 'mình mặc size 41':
    case 'mình mặc size 42':
    case 'Mình mặc size 43':
    case 'Mình mặc size 35':
    case 'Mình mặc size 36':
    case 'Mình mặc size 37':
    case 'Mình mặc size 38':
    case 'Mình mặc size 39':
    case 'Mình mặc size 40':
    case 'Mình mặc size 41':
    case 'Mình mặc size 42':
    case 'Mình mặc size 43':
    case 'Mình mặc 35':
    case 'Mình mặc 36':
    case 'Mình mặc 37':
    case 'Mình mặc 38':
    case 'Mình mặc 39':
    case 'Mình mặc 40':
    case 'Mình mặc 41':
    case 'Mình mặc 42':
    case 'Mình mặc 43':
    case 'size 35':
    case 'size 36':
    case 'size 37':
    case 'size 38':
    case 'size 39':
    case 'size 40':
    case 'size 41':
    case 'size 42':
    case 'size 43':
    case 'Size 35':
    case 'Size 36':
    case 'Size 37':
    case 'Size 38':
    case 'Size 39':
    case 'Size 40':
    case 'Size 41':
    case 'Size 42':
    case 'Size 43':

    case 'chốt đôi này':
    case 'thế mình lấy đôi này':
    case 'lấy mình đôi này nhé':

    case 'Chốt đôi này':
    case 'Thế mình lấy đôi này':
    case 'Lấy mình đôi này nhé':
    case '':
    case '':
    case '':
    case '':
    case '':
      response = { "text": "Bạn hãy nhấn vào dấu 3 gạch bên góc phải phía dưới, tiếp theo nhấn khởi động lại Bot để tiến hành mua hàng." }
      break;
    case '44':
    case '45':
    case 'Size 44':
    case 'Size 45':
    case 'size 44':
    case 'size 45':
    case 'Mình mặc 44':
    case 'Mình mặc 45':
    case 'Mình mặc size 45':
    case 'Mình mặc size 44':
      response = { "text": "Rất tiếc, bên em không về size đó ạ" }
      break;
    //---------------------------------------------------------------------------------
    //CÁC CÂU HỎI MUA GIÀY
    case 'Bán cho đôi giày':
    case 'Bán giày không':
    case 'Cho đôi giày':
    case 'Mình mua giày':
    case 'Mình mua đôi này':
    case 'Bán giày bạn ơi':
    case 'bán cho đôi giày':
    case 'bán giày không':
    case 'cho đôi giày':
    case 'mình mua giày':
    case 'mình mua đôi này':
    case 'bán giày bạn ơi':
    case 'bên mình có mẫu nào':
    case 'bên mình có những mẫu nào vậy':
    case 'bên mình có mẫu nào vậy':
    case 'em muốn mua giày':
    case 'mình muốn mua giày':
    case 'Mình muốn mua giày':
    case 'Mình bán những mẫu nào vậy':
    case 'Bên mình bán những mẫu gì vậy':
    case 'Có giày nike không':
    case 'Có giày converse không':
    case 'Có giày newbalane không':
    case 'Có mẫu nào vậy':
    case 'Cho xem mẫu':
    case 'Cho mình xem mẫu':
    case 'Có mẫu này không':
    case 'mình bán những mẫu nào vậy':
    case 'bên mình bán những mẫu gì vậy':
    case 'có giày nike không':
    case 'có giày converse không':
    case 'có giày newbalane không':
    case 'có giày vans không':
    case 'Có giày vans không':
    case 'có mẫu nào vậy':
    case 'cho xem mẫu':
    case 'cho mình xem mẫu':
    case 'có mẫu này không':
    case 'có nike không':
    case 'có converse không':
    case 'có vans không':
    case 'Có nike không':
    case 'Có converse không':
    case 'Có vans không':
    case 'Tôi muốn mua giày':
    case 'tôi muốn mua giày':
    case 'lấy mình mẫu này ':
    case 'Lấy mình mẫu này ':
    case 'Bán cho em đôi giày':
    case 'Bán cho mình đôi giày':
    case 'bán cho em đôi giày':
    case 'bán cho mình đôi giày':
    case 'mình mua giày':
    case 'Mình mua giày':
    case 'có bán giày không':
    case 'bán giày không':
    case 'có bán giày không':
    case 'Bán giày không':
    case 'Có bán giày không':
    case 'mình có bán giày không':
    case 'có mẫu này không':
    case 'mình còn mẫu này không':
    case 'còn mẫu này không':
    case 'bán giày':
    case 'có giày size 35 không':
    case 'có giày size 36 không':
    case 'có giày size 37 không':
    case 'có giày size 38 không':
    case 'có giày size 39 không':
    case 'có giày size 40 không':
    case 'có giày size 41 không':
    case 'có giày size 42 không':
    case 'có giày size 43 không':
    case 'Có giày size 35 không':
    case 'Có giày size 36 không':
    case 'Có giày size 37 không':
    case 'Có giày size 38 không':
    case 'Có giày size 39 không':
    case 'Có giày size 40 không':
    case 'Có giày size 41 không':
    case 'Có giày size 42 không':
    case 'Có giày size 43 không':
    case 'có giày size 35 không ạ':
    case 'có giày size 36 không ạ':
    case 'có giày size 37 không ạ':
    case 'có giày size 38 không ạ':
    case 'có giày size 39 không ạ':
    case 'có giày size 40 không ạ':
    case 'có giày size 41 không ạ':
    case 'có giày size 42 không ạ':
    case 'có giày size 43 không ạ':
    case 'Có giày size 35 không ạ':
    case 'Có giày size 36 không ạ':
    case 'Có giày size 37 không ạ':
    case 'Có giày size 38 không ạ':
    case 'Có giày size 39 không ạ':
    case 'Có giày size 40 không ạ':
    case 'Có giày size 41 không ạ':
    case 'Có giày size 42 không ạ':
    case 'Có giày size 43 không ạ':
    case '':
    case '':
    case '':
    case '':
      response = { "text": "Bên mình hiện tại đang kinh doanh các mẫu giày Nike,Converse,Vans,Puma,... không biết bạn đang tìm mẫu nào." }
      break;

    //---------------------------------------------------------------------------------
    //HỎI GIÁ 
    case 'giá sao shop':
    case 'Giá sao shop':
    case 'giá sao ạ':
    case 'giá đôi này như nào':
    case 'đôi này bao nhiều tiền':
    case 'đôi này giá sao':
    case 'bao nhiêu tiền':
    case 'Giá':
    case 'giá':
    case 'Giá sao':
    case 'giá sao':
    case 'Giá sao ạ':
    case 'Giá đôi này như nào':
    case 'Đôi này bao nhiều tiền':
    case 'Đôi này giá sao':
    case 'Bao nhiêu tiền':
    case 'giá bao nhiêu':
    case 'Giá bao nhiêu':
      response = { "text": "Các mẫu giày mình đang kinh doanh đồng giá 450k nhé." }
      // code block
      break;

    //---------------------------------------------------------------------------------
    //CÁC CÂU TAM BIỆT
    case 'Bye':
    case 'bye':
    case 'tạm biệt':
    case 'bye nhé':
    case 'Tạm biệt':
    case 'ok':
    case 'Ok':
    case 'OK':
    case 'OK bạn':
    case 'ok':
    case 'ok bạn':
      response = { "text": "Chào bạn, Hẹn ngày gặp bạn sớm nhất." }
      // code block
      break;

    default: //Optional
      response = { "text": "Bên mình sẽ liên hệ lại với bạn sớm nhất. " }
  }
  if (received_message.attachments) {
    // Get the URL of the message attachment
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "Đây có phải thứ bạn đang muốn không?",
            "subtitle": "Bạn hãy nhân nút ở dưới để trả lời.",
            "image_url": attachment_url,
            "buttons": [
              {
                "type": "postback",
                "title": "Chính là nó!",
                "payload": "yes",
              },
              {
                "type": "postback",
                "title": "Không phải!",
                "payload": "no",
              }
            ],
          }]
        }
      }
    }
  }

  // Send the response message
  callSendAPI(sender_psid, response);
}

// Handles messaging_postbacks events
async function handlePostback(sender_psid, received_postback) {
  let response;

  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  switch (payload) {
    case 'yes':
      response = { "text": "Chúng tôi sẽ nhanh chóng liên hệ lại với bạn" }
      // code block
      break;
    case 'no':
      response = { "text": "Thế hãy gửi cho mình một bức hình mà đó thứ bạn muốn." }
      // code block
      break;
    case 'RESTART_BOT':
    case 'GET_STARTED':
      await chatbotSevices.handleGetStarted(sender_psid, response);

      break;

    case 'LIST PRODUCT':
      await chatbotSevices.handleSendList(sender_psid, response);

      break;
    case 'NIKE':
      await chatbotSevices.handleSendListNike(sender_psid, response);

      break;
    case 'CONVERSE':
      await chatbotSevices.handleSendListConverse(sender_psid, response);

      break;
    case 'VANS':
      await chatbotSevices.handleSendListVans(sender_psid, response);

      break;

    default:
      response = { "text": "Chúng mình đã thấy đã nhận được đơn đặt hàng từ bạn. Bạn vui lòng cho mình xin địa chỉ và size giày." }
    // code block
  }

  // Send the message to acknowledge the postback
  callSendAPI(sender_psid, response);
}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
  // Construct the message body
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
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  });
}

let setupProfile = (req, res) => {
  // Construct the message body
  let request_body = {
    "get_started": { "payload": "GET_STARTED" },
    "whitelistend_domains": ["https://chatbot-demo-siz.herokuapp.com/"]
  }

  // Send the HTTP request to the Messenger Platform
  request({
    "uri": `https://graph.facebook.com/v11.0/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`,
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    console.log(body)
    if (!err) {
      console.log('Setup user profile success!')
    } else {
      console.error("Unable to Setup user profile:" + err);
    }
  });

}
let setupPersistentMenu = (req, res) => {

  let request_body = {
    "persistent_menu": [
      {
        "locale": "default",
        "composer_input_disabled": false,
        "call_to_actions": [
          {
            "type": "postback",
            "title": "Khởi Động Lại Bot",
            "payload": "RESTART_BOT"
          },
          {
            "type": "web_url",
            "title": "Facebook Admin nè",
            "url": "https://www.facebook.com/tranghansieu",
            "webview_height_ratio": "full"
          },

        ]
      }
    ]
  }

  // Send the HTTP request to the Messenger Platform
  request({
    "uri": `https://graph.facebook.com/v11.0/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`,
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    console.log(body)
    if (!err) {
      console.log('Setup mersistent menu success!')
    } else {
      console.error("Unable to Setup user profile:" + err);
    }
  });
  return res.send("Setup mersistent menu success!");
}

let handleReserveTable = (req, res) => {
  return res.render('reserve-table.ejs');
}
module.exports = {
  getHomePage: getHomePage,//key :value
  getWebhook: getWebhook,
  postWebhook: postWebhook,
  setupProfile: setupProfile,
  setupPersistentMenu: setupPersistentMenu,
  handleReserveTable: handleReserveTable,
}
const Mailjet = require("node-mailjet"), mailjet = Mailjet.apiConnect("6a3d5e8f499ff38748c598edd59b063d", "d4a33965e9a93e343405f83a9d90a6b2"); function mailSend(a, b) {
    const c = mailjet.post("send", { version: "v3.1" }).request({
        Messages: [{
            From: { Email: "noreply@fishcontent.my.id", Name: "No Reply" }, To: [{ Email: a, Name: "" }], Subject: "Verifikasi Email", HTMLPart: `<!doctype html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>Simple Transactional Email</title>
            <style>
                @media only screen and (max-width: 620px) {
                    table.body h1 {
                        font-size: 16px !important;
                        margin-bottom: 15px !important;
                        text-align: center;
                    }
        
                    table.body p,
                    table.body ul,
                    table.body ol,
                    table.body td,
                    table.body span,
                    table.body a {
                        font-size: 12px !important;
                        text-align: center;
                        margin-bottom: 4px;
                    }
        
                    table.head{
                        width: 100% !important;
                    }
        
                    table.body .wrapper,
                    table.body .article {
                        padding: 10px !important;
                    }
        
                    table.body .content {
                        padding: 0 !important;
                    }
        
                    table.body .container {
                        padding: 0 !important;
                        width: 100% !important;
                    }
        
                    table.body .main {
                        border-left-width: 0 !important;
                        border-radius: 0 !important;
                        border-right-width: 0 !important;
                    }
        
                    table.body .btn table {
                        width: 100% !important;
                    }
        
                    table.body .btn a {
                        width: 100% !important;
                    }
        
                    table.body .img-responsive {
                        height: auto !important;
                        max-width: 100% !important;
                        width: auto !important;
                    }
                }
                @media all {
                    .ExternalClass {
                        width: 100%;
                    }
        
                    .ExternalClass,
                    .ExternalClass p,
                    .ExternalClass span,
                    .ExternalClass font,
                    .ExternalClass td,
                    .ExternalClass div {
                        line-height: 100%;
                    }
        
                    .apple-link a {
                        color: inherit !important;
                        font-family: inherit !important;
                        font-size: inherit !important;
                        font-weight: inherit !important;
                        line-height: inherit !important;
                        text-decoration: none !important;
                    }
        
                    #MessageViewBody a {
                        color: inherit;
                        text-decoration: none;
                        font-size: inherit;
                        font-family: inherit;
                        font-weight: inherit;
                        line-height: inherit;
                    }
        
                    .btn-primary table td:hover {
                        background-color: #eb7a3e !important;
                    }
        
                    .btn-primary a:hover {
                        background-color: #eb7a3e !important;
                        border-color: #eb7a3e !important;
                    }
                }
        </style>
        </head>
          <body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr align="center" >
                    <td class="container"  >
                        <table border="0" cellpadding="0" class="head" style="width: 560px; background-color: #ffffff;"  cellspacing="0"  >
                            <tr align="center" >
                                <td style="text-align: center;"><img src="https://valrbn.stripocdn.email/content/guids/CABINET_312acabf842c446b99207bd55a9f219a/images/logosamping_lsi.png" alt="fishcontent" class="image" style="width: 6rem;"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
              <tr>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
                <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding:  0 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
                  <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 0 10px;">
        
                    <!-- START CENTERED WHITE CONTAINER -->
                    <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
        
                      <!-- START MAIN CONTENT AREA -->
                      <tr>
                        <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px; padding-top: 10px;" valign="top">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                            <tr>
                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                                <h1 style="font-family: sans-serif; font-size: 24px; font-weight: 700; margin: 0; margin-bottom: 15px; text-align: center;">Welcome to Fishcontent Indonesia</h1>
                                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Terimakasih telah bergabung dengan komunitas fishcontent Indonesia, untuk dapat menggunakan akun anda harap verifikasi email anda terlebih dahulu dengan menekan tombol verifikasi dibawah ini.</p>
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%;" width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="center" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top">
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto; margin-top: 15px ">
                                          <tbody>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px; text-align: center; background-color: #ea580c;" valign="top" align="center" bgcolor="#3498db"> <a href="http://${b}" target="_blank" style="border: solid 1px #ea580c; border-radius: 5px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize; background-color: #ea580c; border-color: #ea580c; color: #ffffff;">Verifikasi email</a> </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
        
                    <!-- END MAIN CONTENT AREA -->
                    </table>
                    <!-- END CENTERED WHITE CONTAINER -->
        
                    <!-- START FOOTER -->
                    <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tr>
                          <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                            <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;"> Rt.17 Rw.06 Desa Kasri Kec.Bululawan Kab.Malang </span>
                            <br>
                            <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center; margin-bottom: 8px;"> Jawa timur Indonesia 65166.­ </span>
                            <br> Don't like these emails? <a href="http://i.imgur.com/CScmqnj.gif" style="text-decoration: underline; color: #999999;   font-size: 12px; text-align: center;">Unsubscribe</a>.
                          </td>
                        </tr>
                      </table>
                    </div>
                    <!-- END FOOTER -->
        
                  </div>
                </td>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
              </tr>
            </table>
          </body>
        </html>`}]
    }); c.then(a => { console.log(a.body), console.log(b) }).catch(a => { console.log(a.statusCode) })
} module.exports = mailSend;
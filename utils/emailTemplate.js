export const Verfication_Email_Template = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .container {
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 20px;
    }
    .header {
      text-align: center;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      margin-bottom: 20px;
    }
    .verification-code {
      font-size: 32px;
      font-weight: bold;
      text-align: center;
      letter-spacing: 5px;
      margin: 25px 0;
      color: #4a6ee0;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      text-align: center;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Email Verification</h2>
    </div>
    <p>Hello,</p>
    <p>Thank you for registering with us. To complete your registration, please use the verification code below:</p>
    <div class="verification-code">{verificationCode}</div>
    <p>This code will expire in 10 minutes. If you didn't request this verification code, please ignore this email.</p>
    <p>Best regards,<br>Code by Kunal Team</p>
    <div class="footer">
      <p>This is an automated email. Please do not reply to this message.</p>
    </div>
  </div>
</body>
</html>
`;

export const Welcome_Email_Template = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Our Service</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .container {
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 20px;
    }
    .header {
      text-align: center;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      margin-bottom: 20px;
    }
    .welcome-message {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin: 25px 0;
      color: #4a6ee0;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      text-align: center;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Welcome to the Elite Club</h2>
    </div>
    <p>Hello {name},</p>
    <p>Thank you for joining us! Your account has been successfully verified and activated.</p>
    <div class="welcome-message">Welcome Aboard!</div>
    <p>You now have full access to all our services and features. Feel free to explore and reach out if you need any assistance.</p>
    <p>Best regards,<br>Code by Kunal Team</p>
    <div class="footer">
      <p>This is an automated email. Please do not reply to this message.</p>
    </div>
  </div>
</body>
</html>
`;

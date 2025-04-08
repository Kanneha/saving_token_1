const crypto = require('crypto');
const secret = crypto.randomBytes(64).toString('hex');
console.log('Generated JWT Secret:\n', secret);

const jwt = require('jsonwebtoken');

// Replace with a secure, secret key and store it in environment variables in production
const secretKey = 'your_secret_key';


const encrypt = (payload) => {
  return jwt.sign(payload, secretKey, {
    algorithm: 'HS256',
    expiresIn: '1h', // token expires in 1 hour
  });
};

const decrypt = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    console.error('Invalid token:', error.message);
    return null;
  }
};

module.exports = {
  encrypt,
  decrypt
};

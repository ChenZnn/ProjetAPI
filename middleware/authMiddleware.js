// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // On suppose que le token est dans l'en-tête Authorization sous la forme "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Accès non autorisé' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token invalide' });
        }

        req.user = user;
        next();
    });
};

module.exports = authenticateToken;

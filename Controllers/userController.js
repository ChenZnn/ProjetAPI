const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Ajouter un utilisateur
    exports.createUser = async (req, res) => {
        try {
            // Vérifiez si tous les champs requis sont présents
            const { nom, prenom, username, password } = req.body;
            if (!nom || !prenom || !username || !password) {
                return res.status(400).json({ message: 'Tous les champs obligatoires doivent être remplis.' });
            }

            // Vérifiez si le nom d'utilisateur existe déjà
            const existingUser = await User.findOne({ where: { Username: username } });
            if (existingUser) {
                return res.status(400).json({ message: 'Le nom d\'utilisateur existe déjà.' });
            }

            // Hachez le mot de passe avec bcrypt
            const hashedPassword = await bcrypt.hash(password, 10);

            console.log('Mot de passe original:', password);
            console.log('Mot de passe haché:', hashedPassword);

            // Créez un nouvel utilisateur
            const newUser = await User.create({
                Nom: nom,
                Prenom: prenom,
                Username: username,
                Password: hashedPassword
            });

            return res.status(201).json({ message: 'Utilisateur créé avec succès.', user: newUser });
        } catch (error) {
            console.error('Erreur dans createUser:', error.message);
            return res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur.', error });
        }
    };


// Connexion d'un utilisateur
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        console.log('Requête de connexion reçue pour l\'utilisateur:', username);
        
        // Rechercher un utilisateur avec le nom d'utilisateur
        const user = await User.findOne({ where: { Username: username } });
        if (!user) {
            console.log('Utilisateur non trouvé');
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        console.log('Utilisateur trouvé:', user.Username);
        console.log('Hachage trouvé en base :', user.Password);
        console.log('Résultat comparaison bcrypt :', await bcrypt.compare(password, user.Password));
        
        // Comparer le mot de passe en texte clair avec celui haché dans la base de données
        const isPasswordValid = await bcrypt.compare(password, user.Password);
        if (!isPasswordValid) {
            console.log("Mot de passe incorrect");
            return res.status(401).json({ message: "Mot de passe incorrect" }); // Retourner 401 si mot de passe incorrect
        }



        // Générer un JWT seulement si le mot de passe est valide
        const token = jwt.sign({ idUser: user.idUser }, process.env.JWT_SECRET, { expiresIn: '1h' });

        console.log('Connexion réussie pour l\'utilisateur:', user.Username);
        res.status(200).json({ message: "Connexion réussie", token });

    } catch (error) {
        console.error('Erreur dans le processus de connexion:', error);
        res.status(500).json({ message: "Erreur lors de la connexion", error });
    }
};




// Obtenir tous les utilisateurs
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs", error });
    }
};

// Obtenir un utilisateur spécifique
exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur", error });
    }
};

// Mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { nom, prenom, username, password } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        user.Nom = nom || user.Nom;
        user.Prenom = prenom || user.Prenom;
        user.Username = username || user.Username;  

        if (password) { // Seulement si un nouveau mot de passe est fourni
            user.Password = await bcrypt.hash(password, 10);
        }

        await user.save();
        res.status(200).json({ message: "Utilisateur mis à jour", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur", error });
    }
};

// Supprimer un utilisateur
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        await user.destroy();
        res.status(200).json({ message: "Utilisateur supprimé" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur", error });
    }
};

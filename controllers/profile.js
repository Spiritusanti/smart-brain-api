const handleProfileGet= (req, res, db) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
           return res.json(user);
        }
    })
    if (!found) {
        res.status(404).json('not found');
    }
}


module.exports = {
    handleProfileGet 
}
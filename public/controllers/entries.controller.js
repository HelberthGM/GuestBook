const entries = [];

const renderIndex = (req, res) => {
    res.render('index', {entries});
};

const renderNewEntry = (req, res) => {
    res.render('new-entry');
};

const createNewEntry = (req, res) => {
    const newEntry = {
        name: req.body.name,
        email: req.body.email,
        website: req.body.website,
        comments: req.body.comments,
        published: new Date()
    }
    entries.push(newEntry);
    res.redirect('/');
};

module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry
}
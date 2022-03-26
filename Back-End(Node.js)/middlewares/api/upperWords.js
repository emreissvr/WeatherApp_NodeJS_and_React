const upperWords =  async (req,res,next) => {

    const _locationName =  await req.query.locationName
    
    // Kullanıcın girdiği her kelimenin başını API'nin istediği formata dönüştürür.
    // Kelimeler düzensiz yazılsa bile baş harfi büyük diğer harfleri küçük olarak formatlanır.

    var pieces = _locationName.split(" ");
    for(var i = 0; i < pieces.length; i++){
        var firstOfWord =  pieces[i].charAt(0).toUpperCase();
        pieces[i] = firstOfWord + pieces[i].substr(1).toLowerCase();
    }

    locationName = pieces.join(" ");
    
    // bir sonraki middleware'e yani getWeatherDataFromAPI'e gidecek
    next();
}

module.exports = upperWords;

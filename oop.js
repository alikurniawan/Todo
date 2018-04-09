class orang {
  constructor(nama, gender){
    this.nama = nama || "";
    this.gender = gender || "";
  }

  gantiNama(namaBaru){
    this.nama = namaBaru
  }
}

var dono = new orang("john", "Male");

john.nama

/// ------------------------------------------------------
class Guru extends orang{
  constructor(nama, gender, gelar){
    super(nama, gender)
    this.gelar = []
  }
}
tambahGelar(gelarBaru){
  this.gelar.push(gelarBaru)
}
tampilkanNamaGelar(){
  var text = this.nama
  this.gelar.map((gelar) => {
    text += `,${gelar}`
    return text
  })
}

//=============API=================================================

var getData = function(){
  return fetch("https://api.github.com/users/alikurniawan/followers"
  .then(response => {
    return response.json();
  })
  .then(datas => {
    return datas;
  })
)
}

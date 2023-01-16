// Array di oggetti
const members = [
    {
        name: 'Wayne Barnett',
        occupation: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angel Caroll',
        occupation: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        occupation: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        occupation: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        occupation: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        occupation: 'Graphic Designer',
        img:'barbara-ramos-graphic-designer.jpg'
    }
];

// Stampa in console le informazioni contenute in nome, occupazione e nome file foto per ogni membro
for(let i = 0; i < members.length; i++) {
    console.log('Membro numero: ' + (i + 1));

    for(let key in members[i]) {
        console.log(key + ': ' + members[i][key]);
    }
    console.log('―――――――――――――――')
}

// Stampa nella DOM le informazioni contenute in nome, occupazione e nome file foto per ogni membro

for(let i = 0; i < members.length; i++){
    const h4 = document.createElement('h3');
    const section = document.querySelector('section');

    h4.innerText = "Membro numero: " + (i + 1);

    section.append(h4)
    
    for(let key in members[i]){
        const p = document.createElement('p');
        p.innerText = key + ': ' + members[i][key];
        section.append(p)
    }
    const p = document.createElement('p');
    p.innerText = '―――――――――';
    section.append(p);
}
var app = new Vue({
    el: "#vueContainer",
    data: {
        copypaste: "",
        mosse: [],
        team: [
            {
                name: "pikachu",
                other: "",
                sex: " ",
                level: 50,
                ability: "static",
                item: "sitrus-berry",
                types: [],
                id: "",
                sprite: "",
                teratype: "electric",
                moves: [
                    {
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },
                ]
            },
            {
                name: "pikachu",
                other: "",
                sex: " ",
                level: 50,
                ability: "static",
                item: "sitrus-berry",
                types: [],
                id: "",
                sprite: "",
                teratype: "electric",
                moves: [
                    {
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },
                ]
            },
            {
                name: "pikachu",
                other: "",
                sex: " ",
                level: 50,
                ability: "static",
                item: "sitrus-berry",
                types: [],
                id: "",
                sprite: "",
                teratype: "electric",
                moves: [
                    {
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },
                ]
            },
            {
                name: "pikachu",
                other: "",
                sex: " ",
                level: 50,
                ability: "static",
                item: "sitrus-berry",
                types: [],
                id: "",
                sprite: "",
                teratype: "electric",
                moves: [
                    {
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },
                ]
            },
            {
                name: "pikachu",
                other: "",
                sex: " ",
                level: 50,
                ability: "static",
                item: "sitrus-berry",
                types: [],
                id: "",
                sprite: "",
                teratype: "electric",
                moves: [
                    {
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },
                ]
            },{
                name: "pikachu",
                other: "",
                sex: " ",
                level: 50,
                ability: "static",
                item: "sitrus-berry",
                types: [],
                id: "",
                sprite: "",
                teratype: "electric",
                moves: [
                    {
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },{
                        name: "thunderbolt",
                        type: "electric",
                    },
                ]
            },
        ]
    },
    mounted(){
        this.copypaste=prompt("incolla qui il team da analizzare");
        this.parseTeam(this.copypaste);
    },
    methods: {
        parseTeam(copypaste) {
            const raw = copypaste.split("\n\r\n");
            //const raw = copypaste.split("\n\r\n"); //CRLF
            //const raw = copypaste.split("\n\n"); //LF
            for (var index in raw){
                //RIGA 1: Nome, forma, sesso, oggetto
                const infos = raw[index].split("\r\n");
                //const infos = raw[index].split("\r\n"); //CRLF
                //const infos = raw[index].split("\n"); //LF
                var temp = infos[0].split(" @ ")[0];
                if(temp.includes("-")){
                    this.team[index].name = temp.split("-")[0];
                    temp = temp.split("-")[1];
                    if(temp.includes("(")){
                        this.team[index].other = temp.split("(")[0];
                        this.team[index].sex = temp.split("(")[1][0];
                    }else{
                        this.team[index].other = temp.split(" @ ")[0];
                    }
                }else if(temp.includes("(")){
                    this.team[index].name = temp.split("(")[0];
                    this.team[index].sex = temp.split("(")[1][0];
                }else{
                    this.team[index].name = temp.split(" @ ")[0];
                }
                this.team[index].item = infos[0].split(" @ ")[1];
                //console.log(infos);
                //console.log(this.team[index].item);
                //RIGA 2: Abilità
                for(const i in infos){
                    if(infos[i].includes("Ability")){
                        this.team[index].ability = infos[i].split(": ")[1];
                        break;
                    }
                }
                //RIGA 3: Livello
                for(const i in infos){
                    if(infos[i].includes("Level")){
                        this.team[index].level = infos[i].split(": ")[1];
                        break;
                    }
                }
                //RIGA 4: Tera Type
                for(const i in infos){
                    if(infos[i].includes("Tera Type")){
                        this.team[index].teratype = infos[i].split(": ")[1];
                        this.team[index].teratype =  this.team[index].teratype.split(" ")[0];
                        break;
                    }
                }
                //MOVES
                var j=0;
                for(const i in infos){
                    if(infos[i].includes("-") && i!=0){
                        this.team[index].moves[j].name=infos[i].slice(2);
                        this.cerca_mossa(this.team[index].moves[j].name, index, j);
                        j++;
                    }

                }
                //Types and id
                this.cerca_pkmn(this.team[index].name, index);
            }

            
        },
        cerca_pkmn(name, index) {
            name = name.trimEnd();
            name = name.toLowerCase().replace(" ", "-");
            name = name.toLowerCase().replace(" ", "-");
            /*while(name.charAt(name.length-1)=="-"){
                name = name.slice(0, -1);
            }*/
            console.log(name);
            axios.get('https://pokeapi.co/api/v2/pokemon/'+name, {
            }).then(function(risultato) {
                app.team[index].types.push(risultato.data.types[0].type.name);
                if(risultato.data.types.length==2){
                    app.team[index].types.push(risultato.data.types[1].type.name);
                }
                app.team[index].id = risultato.data.order;
                console.log(risultato.data.sprites.front_default);
                app.team[index].sprite = risultato.data.sprites.front_default;
            });
        },
        cerca_mossa(name, pokemon, index) {
            name = name.trimEnd();
            name = name.toLowerCase().replace(" ", "-");
            name = name.toLowerCase().replace(" ", "-");
            axios.get('https://pokeapi.co/api/v2/move/'+name, {
            }).then(function(risultato) {
                app.team[pokemon].moves[index].type = risultato.data.type.name;
            });
        },
        teratype(pokemon) {
            return "teratypes/"+pokemon.teratype.toLowerCase()+".png";
        },
        type(thing){
            return "types/"+thing+".png";
        },
        sprite(id){
            string = ""+id;
            while(string.length<4){
                string = "0"+string;
            }
            return "sprites/pm"+string+"_00_00_00_big.png";
        }

    }
});
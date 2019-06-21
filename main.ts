import player_board from './player_board';
import computer_board from './computer_board';

import decor from './w';
document.addEventListener("DOMContentLoaded", function (event) {
    let p_b_f = new player_board();
    let c_b_f = new computer_board();

    document.getElementById("bt_start").onclick = function () {
        document.getElementById("bt_start").remove();
        const info = document.getElementById('d_info') as HTMLElement;
        info.innerHTML = "Strzel w pole na planszy komputera";

        let c_s: number[][] = [];
        let p_s: number[][] = []
        for (let i = 1; i < 11; i++) {
            p_s[i] = [];
            c_s[i] = [];
            for (let ii = 1; ii < 11; ii++) {
                p_s[i][ii] = 0;
                c_s[i][ii] = 0;
            }
        }

        let turn: number = 0;

        function gameplay() {
            switch (turn % 2) {
                case 0: {
                    info.innerHTML = "Strzel w pole na planszy komputera";

                    for (let i = 1; i < 11; i++) {
                        for (let ii = 1; ii < 11; ii++) {
                            if (p_s[i][ii] == 0) {
                                document.getElementById("c" + (i) + "_" + (ii)).addEventListener("click", p_shot)

                            }
                            else {
                                null;
                            }

                        }
                    }

                    break;
                }
                case 1: {
                    info.innerHTML = "Komputer strzela";
                    setTimeout(() => {
                        c_shot()
                    }, 1000);


                    break;
                }
            }
            setTimeout(() => {
            let p_score:number=0;
            let c_score:number=0;
            for (let i = 1; i < 11; i++) {
                for (let ii = 1; ii < 11; ii++) {
                    if(p_s[i][ii] == 1 && c_b_f.cords_comp[ii][i] == 1){
                        p_score++;
                    }
                    if(c_s[i][ii] == 1 && p_b_f.cords_pl[i][ii] == 1){
                        c_score++;
                    }
                }
            }
            if(p_score==20){
                window.alert("Wygrałeś")
                window.location.reload()
            }
            if(c_score==20){
                window.alert("Przegrałeś")
                window.location.reload()
            }
        }, 1100);
        }

        gameplay();

        function p_shot() {
            let id = this.id.split("_")
            let id_x = id[0].substr(1, 2)
            let id_y = id[1];
            let ww = new decor("Gracz");
            ww.turn(id_x + "-" + id_y);
            if (c_b_f.cords_comp[id_y][id_x] == 0) {
                console.log("Gracz - pudło")
                document.getElementById("c" + (id_x) + "_" + (id_y)).innerHTML = "&#9675;";
            }
            if (c_b_f.cords_comp[id_y][id_x] == 1) {
                console.log("Gracz - trafione")
                document.getElementById("c" + (id_x) + "_" + (id_y)).innerHTML = "X";
            }
            for (let i = 1; i < 11; i++) {
                for (let ii = 1; ii < 11; ii++) {
                    document.getElementById("c" + (i) + "_" + (ii)).removeEventListener("click", p_shot)
                }
            }
            p_s[id_x][id_y] = 1;
            turn++;
            gameplay()
        }

        function c_shot() {
            random();
            function random() {
                let x = Math.floor(Math.random() * 10) + 1;
                let y = Math.floor(Math.random() * 10) + 1;
                if (c_s[y][x] == 0) {
                    if (p_b_f.cords_pl[y][x] == 0) {
                        console.log("Komputer - pudło")
                        document.getElementById((x) + "_" + (y)).innerHTML = "&#9675;";
                    }
                    if (p_b_f.cords_pl[y][x] == 1) {
                        console.log("Komputer - trafione")
                        document.getElementById((x) + "_" + (y)).innerHTML = "X";
                    }
                    c_s[y][x] = 1
                }
                else {
                    random();
                }
                let ww = new decor("Komputer");
                ww.turn(x + "-" + y);
            }
            turn++;
            gameplay()

        }

    }

});



    export default class Ships {
        cords_comp: number[][] = []
        constructor() {
            this.cords_comp_table();
            this.random_cords();
            this.htmlTable();
        }
        cords_comp_table(): void {//Cords_Comp_Table
            for (let i = 0; i < 12; i++) {
                this.cords_comp[i] = [];
                for (let ii = 0; ii < 12; ii++) {
                    this.cords_comp[i][ii] = 0;
                }
            }
        }
        random_cords(): void {
            let order = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
            for (let i = 0; i < order.length; i++) {
                switch (order[i]) {
                    case 4:
                        //console.log(4)
                        let direction4 = Math.round(Math.random());
                        switch (direction4) {
                            case 0: // horizontal
                                let random = (): void => {
                                    let x = Math.floor(Math.random() * 10) + 1;
                                    let y = Math.floor(Math.random() * 10) + 1;
                                    if (x + 3 <= 10 && this.cords_comp[y][x] == 0 && this.cords_comp[y][x + 1] == 0 && this.cords_comp[y][x + 2] == 0 && this.cords_comp[y][x + 3] == 0 && this.cords_comp[y + 1][x] == 0 && this.cords_comp[y + 1][x + 1] == 0 && this.cords_comp[y + 1][x + 2] == 0 && this.cords_comp[y + 1][x + 3] == 0 && this.cords_comp[y + 1][x - 1] == 0 && this.cords_comp[y + 1][x + 4] == 0 && this.cords_comp[y][x - 1] == 0 && this.cords_comp[y][x + 4] == 0 && this.cords_comp[y - 1][x - 1] == 0 && this.cords_comp[y - 1][x + 4] == 0 && this.cords_comp[y - 1][x] == 0 && this.cords_comp[y - 1][x + 1] == 0 && this.cords_comp[y - 1][x + 2] == 0 && this.cords_comp[y - 1][x + 3] == 0) {
                                        this.cords_comp[y][x] = 1;
                                        this.cords_comp[y][x + 1] = 1;
                                        this.cords_comp[y][x + 2] = 1;
                                        this.cords_comp[y][x + 3] = 1;
                                    }
                                    else {
                                        random();
                                    }
                                }
                                random();
                                break;
                            case 1: // vertical
                                let random2 = (): void => {
                                    let x = Math.floor(Math.random() * 10) + 1;
                                    let y = Math.floor(Math.random() * 10) + 1;
                                    if (y + 3 <= 10 && this.cords_comp[y][x] == 0 && this.cords_comp[y + 1][x] == 0 && this.cords_comp[y + 2][x] == 0 && this.cords_comp[y + 3][x] == 0 && this.cords_comp[y - 1][x] == 0 && this.cords_comp[y + 4][x] == 0 && this.cords_comp[y - 1][x - 1] == 0 && this.cords_comp[y - 1][x + 1] == 0 && this.cords_comp[y][x - 1] == 0 && this.cords_comp[y][x + 1] == 0 && this.cords_comp[y + 1][x - 1] == 0 && this.cords_comp[y + 1][x + 1] == 0 && this.cords_comp[y + 2][x - 1] == 0 && this.cords_comp[y + 2][x + 1] == 0 && this.cords_comp[y + 3][x - 1] == 0 && this.cords_comp[y + 3][x + 1] == 0 && this.cords_comp[y + 4][x - 1] == 0 && this.cords_comp[y + 4][x + 1] == 0) {
                                        this.cords_comp[y][x] = 1;
                                        this.cords_comp[y + 1][x] = 1;
                                        this.cords_comp[y + 2][x] = 1;
                                        this.cords_comp[y + 3][x] = 1;
                                    }
                                    else {
                                        random2();
                                    }
                                }
                                random2();
                                break;
                        }
                        break;
                    case 3:
                        //console.log(3)
                        let direction3 = Math.round(Math.random());
                        switch (direction3) {
                            case 0: // horizontal
                                let random = (): void => {
                                    let x = Math.floor(Math.random() * 10) + 1;
                                    let y = Math.floor(Math.random() * 10) + 1;
                                    if (x + 2 <= 10 && this.cords_comp[y][x] == 0 && this.cords_comp[y][x + 1] == 0 && this.cords_comp[y][x + 2] == 0 && this.cords_comp[y + 1][x] == 0 && this.cords_comp[y + 1][x + 1] == 0 && this.cords_comp[y + 1][x + 2] == 0 && this.cords_comp[y + 1][x - 1] == 0 && this.cords_comp[y + 1][x + 3] == 0 && this.cords_comp[y][x - 1] == 0 && this.cords_comp[y][x + 3] == 0 && this.cords_comp[y - 1][x - 1] == 0 && this.cords_comp[y - 1][x + 3] == 0 && this.cords_comp[y - 1][x] == 0 && this.cords_comp[y - 1][x + 1] == 0 && this.cords_comp[y - 1][x + 2] == 0) {
                                        this.cords_comp[y][x] = 1;
                                        this.cords_comp[y][x + 1] = 1;
                                        this.cords_comp[y][x + 2] = 1;
                                    }
                                    else {
                                        random();
                                    }
                                }
                                random();
                                break;
                            case 1: // vertical
                                let random2 = (): void => {
                                    let x = Math.floor(Math.random() * 10) + 1;
                                    let y = Math.floor(Math.random() * 10) + 1;
                                    if (y + 2 <= 10 && this.cords_comp[y][x] == 0 && this.cords_comp[y + 1][x] == 0 && this.cords_comp[y + 2][x] == 0 && this.cords_comp[y - 1][x] == 0 && this.cords_comp[y + 3][x] == 0 && this.cords_comp[y - 1][x - 1] == 0 && this.cords_comp[y - 1][x + 1] == 0 && this.cords_comp[y][x - 1] == 0 && this.cords_comp[y][x + 1] == 0 && this.cords_comp[y + 1][x - 1] == 0 && this.cords_comp[y + 1][x + 1] == 0 && this.cords_comp[y + 2][x - 1] == 0 && this.cords_comp[y + 2][x + 1] == 0 && this.cords_comp[y + 3][x - 1] == 0 && this.cords_comp[y + 3][x + 1] == 0) {
                                        this.cords_comp[y][x] = 1;
                                        this.cords_comp[y + 1][x] = 1;
                                        this.cords_comp[y + 2][x] = 1;
                                    }
                                    else {
                                        random2();
                                    }
                                }
                                random2();
                                break;
                        }
                        break;
                    case 2:
                        //console.log(2)
                        let direction = Math.round(Math.random());
                        switch (direction) {
                            case 0: // horizontal
                                let random = (): void => {
                                    let x = Math.floor(Math.random() * 10) + 1;
                                    let y = Math.floor(Math.random() * 10) + 1;
                                    if (x + 1 <= 10 && this.cords_comp[y][x] == 0 && this.cords_comp[y][x + 1] == 0 && this.cords_comp[y + 1][x] == 0 && this.cords_comp[y + 1][x + 1] == 0 && this.cords_comp[y + 1][x - 1] == 0 && this.cords_comp[y + 1][x + 2] == 0 && this.cords_comp[y][x - 1] == 0 && this.cords_comp[y][x + 2] == 0 && this.cords_comp[y - 1][x - 1] == 0 && this.cords_comp[y - 1][x + 2] == 0 && this.cords_comp[y - 1][x] == 0 && this.cords_comp[y - 1][x + 1] == 0) {
                                        this.cords_comp[y][x] = 1;
                                        this.cords_comp[y][x + 1] = 1;
                                    }
                                    else {
                                        random();
                                    }
                                }
                                random();
                                break;
                            case 1: // vertical
                                let random2 = (): void => {
                                    let x = Math.floor(Math.random() * 10) + 1;
                                    let y = Math.floor(Math.random() * 10) + 1;
                                    if (y + 1 <= 10 && this.cords_comp[y][x] == 0 && this.cords_comp[y + 1][x] == 0 && this.cords_comp[y - 1][x] == 0 && this.cords_comp[y + 2][x] == 0 && this.cords_comp[y - 1][x - 1] == 0 && this.cords_comp[y - 1][x + 1] == 0 && this.cords_comp[y][x - 1] == 0 && this.cords_comp[y][x + 1] == 0 && this.cords_comp[y + 1][x - 1] == 0 && this.cords_comp[y + 1][x + 1] == 0 && this.cords_comp[y + 2][x - 1] == 0 && this.cords_comp[y + 2][x + 1] == 0) {
                                        this.cords_comp[y][x] = 1;
                                        this.cords_comp[y + 1][x] = 1;
                                    }
                                    else {
                                        random2();
                                    }
                                }
                                random2();
                                break;
                        }
                        break;
                    case 1:
                        let random = (): void => {
                            let x = Math.floor(Math.random() * 10) + 1;
                            let y = Math.floor(Math.random() * 10) + 1;
                            if (this.cords_comp[y][x] == 0 && this.cords_comp[y - 1][x] == 0 && this.cords_comp[y - 1][x + 1] == 0 && this.cords_comp[y][x + 1] == 0 && this.cords_comp[y + 1][x + 1] == 0 && this.cords_comp[y + 1][x] == 0 && this.cords_comp[y + 1][x - 1] == 0 && this.cords_comp[y][x - 1] == 0 && this.cords_comp[y - 1][x - 1] == 0) {
                                this.cords_comp[y][x] = 1
                            }
                            else {
                                random()
                            }
                        }
                        random();
                        break;
                }
            }
        }
        htmlTable = (): void => {
            const main = document.getElementById('right') as HTMLElement;
            if (main) {
                let table: HTMLElement = document.createElement("table");
                main.appendChild(table);
                for (let i = 1; i < 11; i++) {
                    let tr: HTMLElement = document.createElement("tr");
                    table.appendChild(tr);
                    for (let ii = 1; ii < 11; ii++) {
                        let td: HTMLElement = document.createElement("td");
                        td.id = "c"+ii + "_" + i;
                        tr.appendChild(td);
                    }
                }
            }
        }
    }



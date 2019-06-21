export default class Ships {

    cords_pl: number[][] = [];
    table_td: HTMLElement[] = [];
    active_ship: HTMLElement;
    active_td: HTMLElement;
    active_td_length: Number;
    direction: Number = 0;
    possible: boolean = false;
    ready: number = 0;

    constructor() {
        this.htmlTable();
        this.shipsHtml();
        this.change_d();

    }

    change_d = (): void => {
        let that = this;
        document.getElementById('l_right').addEventListener('contextmenu', function (ev) {
            ev.preventDefault();
            switch (that.direction) {
                case 0:
                    that.direction = 1;
                    break;
                case 1:
                    that.direction = 0;
                    break;
            }
            for (let i = 1; i < 11; i++) {
                for (let ii = 1; ii < 11; ii++) {
                    if (that.cords_pl[ii][i] == 0)
                        document.getElementById((i) + "_" + (ii)).style.backgroundColor = "white";
                    if (that.cords_pl[ii][i] == 1)
                        document.getElementById((i) + "_" + (ii)).style.backgroundColor = "purple";
                }
            }
            let td_id = that.active_td.id.split("_");
            let td_x = parseInt(td_id[0]);
            let td_y = parseInt(td_id[1]);
            switch (that.active_td_length) {
                case 1:
                    if (that.possible == true) {
                        that.active_td.style.backgroundColor = "green";
                    }
                    else {
                        that.active_td.style.backgroundColor = "red";
                    }
                    break;

                case 2:
                    if (that.direction == 0) {
                        if (td_x == 10) {
                            if (that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y][td_x - 2] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x - 2] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x - 2] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "red";
                                that.possible = false;
                            }
                        }
                        else {
                            if (that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y + 1][td_x + 1] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x + 2] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y][td_x + 2] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x + 2] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "red";
                                that.possible = false;
                            }

                        }

                    }
                    if (that.direction == 1) {
                        if (td_y == 10) {
                            if (that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y - 2][td_x] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 2][td_x - 1] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0 && that.cords_pl[td_y - 2][td_x + 1] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "red";
                                that.possible = false;
                            }
                        }
                        else {
                            if (that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y + 2][td_x] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x + 1] == 0 && that.cords_pl[td_y + 2][td_x - 1] == 0 && that.cords_pl[td_y + 2][td_x + 1] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "red";
                                that.possible = false;
                            }

                        }


                    }
                    break;
                case 3:
                    if (that.direction == 0) {
                        if (td_x == 9) {
                            if (that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y][td_x - 2] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y + 1][td_x - 2] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x - 2] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "red";
                                that.possible = false;
                            }
                        }
                        else if (td_x == 10) {
                            if (that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y + 1][td_x - 2] == 0 && that.cords_pl[td_y - 1][td_x - 2] == 0 && that.cords_pl[td_y][td_x - 2] == 0 && that.cords_pl[td_y + 1][td_x - 3] == 0 && that.cords_pl[td_y - 1][td_x - 3] == 0 && that.cords_pl[td_y][td_x - 3] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "red";
                                that.possible = false;
                            }
                        }
                        else {
                            if (that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y][td_x + 2] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y + 1][td_x + 1] == 0 && that.cords_pl[td_y + 1][td_x + 2] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x + 3] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y][td_x + 3] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x + 3] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0 && that.cords_pl[td_y - 1][td_x + 2] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "red";
                                that.possible = false;
                            }

                        }

                    }
                    if (that.direction == 1) {
                        if (td_y == 9) {
                            if (that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y - 2][td_x] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x + 1] == 0 && that.cords_pl[td_y - 2][td_x - 1] == 0 && that.cords_pl[td_y - 2][td_x + 1] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "red";
                                that.possible = false;
                            }
                        }
                        else if (td_y == 10) {
                            if (that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y - 2][td_x] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y - 2][td_x - 1] == 0 && that.cords_pl[td_y - 3][td_x] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y - 3][td_x - 1] == 0 && that.cords_pl[td_y - 3][td_x + 1] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "red";
                                that.possible = false;
                            }
                        }
                        else {
                            if (that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y + 2][td_x] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x + 1] == 0 && that.cords_pl[td_y + 2][td_x - 1] == 0 && that.cords_pl[td_y + 2][td_x + 1] == 0 && that.cords_pl[td_y + 3][td_x] == 0 && that.cords_pl[td_y + 3][td_x - 1] == 0 && that.cords_pl[td_y + 3][td_x + 1] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "red";
                                that.possible = false;
                            }

                        }


                    }
                    break;
                case 4:
                    if (that.direction == 0) {
                        if (td_x == 8) {
                            if (that.cords_pl[td_y][td_x - 2] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y][td_x + 2] == 0 && that.cords_pl[td_y - 1][td_x - 2] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0 && that.cords_pl[td_y - 1][td_x + 2] == 0 && that.cords_pl[td_y + 1][td_x - 2] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y + 1][td_x + 1] == 0 && that.cords_pl[td_y + 1][td_x + 2] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "red";
                                that.possible = false;
                            }
                        }
                        else if (td_x == 9) {
                            if (that.cords_pl[td_y][td_x - 3] == 0 && that.cords_pl[td_y][td_x - 2] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y - 1][td_x - 3] == 0 && that.cords_pl[td_y - 1][td_x - 2] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0 && that.cords_pl[td_y + 1][td_x - 3] == 0 && that.cords_pl[td_y + 1][td_x - 2] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y + 1][td_x + 1] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "red";
                                that.possible = false;
                            }
                        }
                        else if (td_x == 10) {
                            if (that.cords_pl[td_y][td_x - 4] == 0 && that.cords_pl[td_y][td_x - 3] == 0 && that.cords_pl[td_y][td_x - 2] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y - 1][td_x - 4] == 0 && that.cords_pl[td_y - 1][td_x - 3] == 0 && that.cords_pl[td_y - 1][td_x - 2] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y + 1][td_x - 4] == 0 && that.cords_pl[td_y + 1][td_x - 3] == 0 && that.cords_pl[td_y + 1][td_x - 2] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x - 3) + "_" + (td_y)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x - 3) + "_" + (td_y)).style.backgroundColor = "red";
                                that.possible = false;
                            }
                        }
                        else {
                            if (that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y][td_x + 2] == 0 && that.cords_pl[td_y][td_x + 3] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0 && that.cords_pl[td_y - 1][td_x + 2] == 0 && that.cords_pl[td_y - 1][td_x + 3] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y + 1][td_x + 1] == 0 && that.cords_pl[td_y + 1][td_x + 2] == 0 && that.cords_pl[td_y + 1][td_x + 3] == 0 && that.cords_pl[td_y][td_x + 4] == 0 && that.cords_pl[td_y - 1][td_x + 4] == 0 && that.cords_pl[td_y + 1][td_x + 4] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 3) + "_" + (td_y)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 3) + "_" + (td_y)).style.backgroundColor = "red";
                                that.possible = false;
                            }

                        }

                    }
                    if (that.direction == 1) {
                        if (td_y == 8) {
                            if (that.cords_pl[td_y - 2][td_x] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y + 2][td_x] == 0 && that.cords_pl[td_y - 2][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 2][td_x - 1] == 0 && that.cords_pl[td_y - 2][td_x + 1] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y + 1][td_x + 1] == 0 && that.cords_pl[td_y + 2][td_x + 1] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "red";
                                that.possible = false;
                            }
                        }
                        else if (td_y == 9) {
                            if (that.cords_pl[td_y - 2][td_x] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y - 3][td_x] == 0 && that.cords_pl[td_y - 2][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y - 3][td_x - 1] == 0 && that.cords_pl[td_y - 2][td_x + 1] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y + 1][td_x + 1] == 0 && that.cords_pl[td_y - 3][td_x + 1] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "red";
                                that.possible = false;
                            }
                        }
                        else if (td_y == 10) {
                            if (that.cords_pl[td_y - 2][td_x] == 0 && that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y - 4][td_x] == 0 && that.cords_pl[td_y - 3][td_x] == 0 && that.cords_pl[td_y - 2][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y - 4][td_x - 1] == 0 && that.cords_pl[td_y - 3][td_x - 1] == 0 && that.cords_pl[td_y - 2][td_x + 1] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y - 4][td_x + 1] == 0 && that.cords_pl[td_y - 3][td_x + 1] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 3)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 3)).style.backgroundColor = "red";
                                that.possible = false;
                            }
                        }
                        else {
                            if (that.cords_pl[td_y - 1][td_x] == 0 && that.cords_pl[td_y][td_x] == 0 && that.cords_pl[td_y + 1][td_x] == 0 && that.cords_pl[td_y + 2][td_x] == 0 && that.cords_pl[td_y + 3][td_x] == 0 && that.cords_pl[td_y + 4][td_x] == 0 && that.cords_pl[td_y - 1][td_x - 1] == 0 && that.cords_pl[td_y][td_x - 1] == 0 && that.cords_pl[td_y + 1][td_x - 1] == 0 && that.cords_pl[td_y + 2][td_x - 1] == 0 && that.cords_pl[td_y + 3][td_x - 1] == 0 && that.cords_pl[td_y + 4][td_x - 1] == 0 && that.cords_pl[td_y - 1][td_x + 1] == 0 && that.cords_pl[td_y][td_x + 1] == 0 && that.cords_pl[td_y + 1][td_x + 1] == 0 && that.cords_pl[td_y + 2][td_x + 1] == 0 && that.cords_pl[td_y + 3][td_x + 1] == 0 && that.cords_pl[td_y + 4][td_x + 1] == 0) {
                                that.active_td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 3)).style.backgroundColor = "green";
                                that.possible = true;
                            }
                            else {
                                that.active_td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 3)).style.backgroundColor = "red";
                                that.possible = false;
                            }

                        }


                    }
                    break;
            }


        }, false);
    }


    positioning = (ev: Event): string => {

        let td = <HTMLElement>ev.target;
        let td_id = td.id.split("_");
        let td_x = parseInt(td_id[0]);
        let td_y = parseInt(td_id[1]);

        switch (this.direction) {
            case 0:
                switch (this.active_ship.childElementCount) {
                    case 1: {
                        if (this.possible == true) {
                            td.style.backgroundColor = "purple";
                            this.cords_pl[td_y][td_x] = 1;
                            this.possible = false;
                            this.ending();
                        }
                        break;
                    }

                    case 2: {
                        if (this.possible == true) {
                            if (td_x == 10) {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y][td_x - 1] = 1;
                                this.ending();
                            }
                            else {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y][td_x + 1] = 1;
                                this.ending();
                            }

                        }
                        break;
                    }

                    case 3: {
                        if (this.possible == true) {
                            if (td_x == 10) {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "purple";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y][td_x - 1] = 1;
                                this.cords_pl[td_y][td_x - 2] = 1;
                                this.ending();
                            }
                            else if (td_x == 9) {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "purple";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y][td_x - 1] = 1;
                                this.cords_pl[td_y][td_x + 1] = 1;
                                this.ending();
                            }
                            else {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "purple";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y][td_x + 1] = 1;
                                this.cords_pl[td_y][td_x + 2] = 1;
                                this.ending();
                            }

                        }
                        break;
                    }
                    case 4: {
                        if (this.possible == true) {
                            if (td_x == 10) {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "purple";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "purple";
                                document.getElementById((td_x - 3) + "_" + (td_y)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y][td_x - 1] = 1;
                                this.cords_pl[td_y][td_x - 2] = 1;
                                this.cords_pl[td_y][td_x - 3] = 1;
                                this.ending();
                            }
                            else if (td_x == 9) {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "purple";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "purple";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y][td_x - 1] = 1;
                                this.cords_pl[td_y][td_x - 2] = 1;
                                this.cords_pl[td_y][td_x + 1] = 1;
                                this.ending();
                            }
                            else if (td_x == 8) {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "purple";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "purple";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y][td_x - 1] = 1;
                                this.cords_pl[td_y][td_x + 2] = 1;
                                this.cords_pl[td_y][td_x + 1] = 1;
                                this.ending();
                            }
                            else {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "purple";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "purple";
                                document.getElementById((td_x + 3) + "_" + (td_y)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y][td_x + 1] = 1;
                                this.cords_pl[td_y][td_x + 2] = 1;
                                this.cords_pl[td_y][td_x + 3] = 1;
                                this.ending();
                            }

                        }
                        break;
                    }
                }
                break;
            case 1:
                switch (this.active_ship.childElementCount) {
                    case 1: {
                        if (this.possible == true) {
                            td.style.backgroundColor = "purple";
                            this.cords_pl[td_y][td_x] = 1;
                            this.possible = false;
                            this.ending();
                        }
                        break;
                    }

                    case 2: {

                        if (this.possible == true) {
                            if (td_y == 10) {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y - 1][td_x] = 1;
                                this.ending();
                            }
                            else {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y + 1][td_x] = 1;
                                this.ending();
                            }
                        }
                        break;
                    }

                    case 3: {
                        if (this.possible == true) {
                            if (td_y == 10) {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y - 1][td_x] = 1;
                                this.cords_pl[td_y - 2][td_x] = 1;
                                this.ending();
                            }
                            else if (td_y == 9) {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y - 1][td_x] = 1;
                                this.cords_pl[td_y + 1][td_x] = 1;
                                this.ending();
                            }
                            else {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y + 1][td_x] = 1;
                                this.cords_pl[td_y + 2][td_x] = 1;
                                this.ending();
                            }
                        }
                        break;
                    }
                    case 4: {
                        if (this.possible == true) {
                            if (td_y == 10) {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y - 3)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y - 1][td_x] = 1;
                                this.cords_pl[td_y - 2][td_x] = 1;
                                this.cords_pl[td_y - 3][td_x] = 1;
                                this.ending();
                            }
                            else if (td_y == 9) {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y - 1][td_x] = 1;
                                this.cords_pl[td_y - 2][td_x] = 1;
                                this.cords_pl[td_y + 1][td_x] = 1;
                                this.ending();
                            }
                            else if (td_y == 8) {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y - 1][td_x] = 1;
                                this.cords_pl[td_y + 2][td_x] = 1;
                                this.cords_pl[td_y + 1][td_x] = 1;
                                this.ending();
                            }
                            else {
                                td.style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "purple";
                                document.getElementById((td_x) + "_" + (td_y + 3)).style.backgroundColor = "purple";
                                this.cords_pl[td_y][td_x] = 1;
                                this.cords_pl[td_y + 1][td_x] = 1;
                                this.cords_pl[td_y + 2][td_x] = 1;
                                this.cords_pl[td_y + 3][td_x] = 1;

                                this.ending();
                            }
                        }
                        break;
                    }
                }
                break;
        }


        return "X";
    }

    ending = (): void => {
        for (let i = 0; i < this.table_td.length; i++) {
            this.table_td[i].removeEventListener("click", this.positioning)
            this.table_td[i].removeEventListener("mouseover", this.predicting)
            this.table_td[i].removeEventListener("mouseleave", this.unpredicting)
        }
        this.active_ship.remove();
        this.active_ship = null;
        this.direction = 0;
        this.ready++;

        if (this.ready == 10) {
            let bt = <HTMLButtonElement>document.getElementById("bt_start");
            bt.disabled = false
            const info = document.getElementById('d_info') as HTMLElement;
            info.innerHTML = 'Kliknij "Start", aby rozpocząć grę';
        }

    }
    predicting = (ev: Event): void => {
        let td = <HTMLElement>ev.target;
        this.active_td = td;
        this.active_td_length = this.active_ship.childElementCount;
        let td_id = td.id.split("_");
        let td_x = parseInt(td_id[0]);
        let td_y = parseInt(td_id[1]);
        switch (this.direction) {
            case 0:
                switch (this.active_ship.childElementCount) {
                    case 1: {
                        if (this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0) {
                            td.style.backgroundColor = "green";
                            this.possible = true;
                        }
                        else {
                            td.style.backgroundColor = "red";
                            this.possible = false;
                        }
                        break;
                    }
                    case 2: {
                        if (td_x + 1 <= 10) {
                            if (this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y + 1][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x + 2] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x + 2] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x + 2] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else if (td_x == 10) {
                            if (this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y + 1][td_x - 2] == 0 && this.cords_pl[td_y - 1][td_x - 2] == 0 && this.cords_pl[td_y][td_x - 2] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else {
                            td.style.backgroundColor = "red";
                            this.possible = false;
                        }

                        break;
                    }

                    case 3: {
                        if (td_x + 2 <= 10) {
                            if (td_x + 2 <= 10 && this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y][td_x + 2] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y + 1][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x + 2] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x + 3] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x + 3] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x + 3] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y - 1][td_x + 2] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else if (td_x == 9) {
                            if (this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y][td_x - 2] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x - 2] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x - 2] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else if (td_x == 10) {
                            if (this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y + 1][td_x - 2] == 0 && this.cords_pl[td_y - 1][td_x - 2] == 0 && this.cords_pl[td_y][td_x - 2] == 0 && this.cords_pl[td_y + 1][td_x - 3] == 0 && this.cords_pl[td_y - 1][td_x - 3] == 0 && this.cords_pl[td_y][td_x - 3] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else {
                            td.style.backgroundColor = "red";
                            this.possible = false;
                        }

                        break;
                    }
                    case 4: {
                        if (td_x + 3 <= 10) {
                            if (td_x + 3 <= 10 && this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y][td_x + 2] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y + 1][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x + 2] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x + 3] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x + 3] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x + 3] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y - 1][td_x + 2] == 0 && this.cords_pl[td_y][td_x + 4] == 0 && this.cords_pl[td_y - 1][td_x + 4] == 0 && this.cords_pl[td_y + 1][td_x + 4] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 3) + "_" + (td_y)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 3) + "_" + (td_y)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else if (td_x == 8) {
                            if (this.cords_pl[td_y][td_x + 2] == 0 && this.cords_pl[td_y][td_x - 2] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y - 1][td_x + 2] == 0 && this.cords_pl[td_y - 1][td_x - 2] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x + 2] == 0 && this.cords_pl[td_y + 1][td_x - 2] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y + 1][td_x + 1] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else if (td_x == 9) {
                            if (this.cords_pl[td_y][td_x - 3] == 0 && this.cords_pl[td_y][td_x - 2] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y - 1][td_x - 3] == 0 && this.cords_pl[td_y - 1][td_x - 2] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x - 3] == 0 && this.cords_pl[td_y + 1][td_x - 2] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y + 1][td_x + 1] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else if (td_x == 10) {
                            if (this.cords_pl[td_y][td_x - 3] == 0 && this.cords_pl[td_y][td_x - 2] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y][td_x - 4] == 0 && this.cords_pl[td_y - 1][td_x - 3] == 0 && this.cords_pl[td_y - 1][td_x - 2] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x - 4] == 0 && this.cords_pl[td_y + 1][td_x - 3] == 0 && this.cords_pl[td_y + 1][td_x - 2] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y + 1][td_x - 4] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "green";
                                document.getElementById((td_x - 3) + "_" + (td_y)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "red";
                                document.getElementById((td_x - 3) + "_" + (td_y)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else {
                            td.style.backgroundColor = "red";
                            this.possible = false;
                        }

                        break;
                    }
                }
                break;
            case 1:
                switch (this.active_ship.childElementCount) {
                    case 1: {
                        if (this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0) {
                            td.style.backgroundColor = "green";
                            this.possible = true;
                        }
                        else {
                            td.style.backgroundColor = "red";
                            this.possible = false;
                        }
                        break;
                    }

                    case 2: {
                        if (td_y + 1 <= 10) {
                            if (this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y + 2][td_x] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x + 1] == 0 && this.cords_pl[td_y + 2][td_x - 1] == 0 && this.cords_pl[td_y + 2][td_x + 1] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else if (td_y == 10) {
                            if (this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y - 2][td_x] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y - 2][td_x - 1] == 0 && this.cords_pl[td_y - 2][td_x + 1] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else {
                            td.style.backgroundColor = "red";
                            this.possible = false;
                        }

                        break;
                    }

                    case 3: {
                        if (td_y + 2 <= 10) {
                            if (td_y + 2 <= 10 && this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y + 2][td_x] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x + 1] == 0 && this.cords_pl[td_y + 2][td_x - 1] == 0 && this.cords_pl[td_y + 2][td_x + 1] == 0 && this.cords_pl[td_y + 3][td_x] == 0 && this.cords_pl[td_y + 3][td_x - 1] == 0 && this.cords_pl[td_y + 3][td_x + 1] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else if (td_y == 9) {
                            if (this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y - 2][td_x] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x + 1] == 0 && this.cords_pl[td_y - 2][td_x - 1] == 0 && this.cords_pl[td_y - 2][td_x + 1] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else if (td_y == 10) {
                            if (this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y - 2][td_x] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y - 2][td_x - 1] == 0 && this.cords_pl[td_y - 3][td_x] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y - 3][td_x - 1] == 0 && this.cords_pl[td_y - 3][td_x + 1] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else {
                            td.style.backgroundColor = "red";
                            this.possible = false;
                        }

                        break;
                    }
                    case 4: {
                        if (td_y + 3 <= 10) {
                            if (td_y + 3 <= 10 && this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y + 2][td_x] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x + 1] == 0 && this.cords_pl[td_y + 2][td_x - 1] == 0 && this.cords_pl[td_y + 2][td_x + 1] == 0 && this.cords_pl[td_y + 3][td_x] == 0 && this.cords_pl[td_y + 3][td_x - 1] == 0 && this.cords_pl[td_y + 3][td_x + 1] == 0 && this.cords_pl[td_y + 4][td_x] == 0 && this.cords_pl[td_y + 4][td_x - 1] == 0 && this.cords_pl[td_y + 4][td_x + 1] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 3)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 3)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else if (td_y == 8) {
                            if (this.cords_pl[td_y + 2][td_x] == 0 && this.cords_pl[td_y - 2][td_x] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y + 2][td_x - 1] == 0 && this.cords_pl[td_y - 2][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y + 2][td_x + 1] == 0 && this.cords_pl[td_y - 2][td_x + 1] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x + 1] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else if (td_y == 9) {
                            if (this.cords_pl[td_y - 3][td_x] == 0 && this.cords_pl[td_y - 2][td_x] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y + 1][td_x] == 0 && this.cords_pl[td_y - 3][td_x - 1] == 0 && this.cords_pl[td_y - 2][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y + 1][td_x - 1] == 0 && this.cords_pl[td_y - 3][td_x + 1] == 0 && this.cords_pl[td_y - 2][td_x + 1] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y + 1][td_x + 1] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else if (td_y == 10) {
                            if (this.cords_pl[td_y][td_x] == 0 && this.cords_pl[td_y - 1][td_x] == 0 && this.cords_pl[td_y - 2][td_x] == 0 && this.cords_pl[td_y - 3][td_x] == 0 && this.cords_pl[td_y][td_x + 1] == 0 && this.cords_pl[td_y - 1][td_x + 1] == 0 && this.cords_pl[td_y - 2][td_x + 1] == 0 && this.cords_pl[td_y - 3][td_x + 1] == 0 && this.cords_pl[td_y][td_x - 1] == 0 && this.cords_pl[td_y - 1][td_x - 1] == 0 && this.cords_pl[td_y - 2][td_x - 1] == 0 && this.cords_pl[td_y - 3][td_x - 1] == 0) {
                                td.style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "green";
                                document.getElementById((td_x) + "_" + (td_y - 3)).style.backgroundColor = "green";
                                this.possible = true;
                            }
                            else {
                                td.style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "red";
                                document.getElementById((td_x) + "_" + (td_y - 3)).style.backgroundColor = "red";
                                this.possible = false;
                            }
                        }
                        else {
                            td.style.backgroundColor = "red";
                            this.possible = false;
                        }

                        break;
                    }
                }
                break;
        }
    }
    unpredicting = (ev: Event): void => {
        let td = <HTMLElement>ev.target;
        let td_id = td.id.split("_");
        let td_x = parseInt(td_id[0]);
        let td_y = parseInt(td_id[1]);
        switch (this.direction) {
            case 0:
                switch (this.active_ship.childElementCount) {
                    case 1: {
                        if (this.cords_pl[td_y][td_x] == 0)
                            td.style.backgroundColor = "white";
                        if (this.cords_pl[td_y][td_x] == 1)
                            td.style.backgroundColor = "purple";
                        break;
                    }

                    case 2: {
                        if (td_x + 1 <= 10) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x + 1] == 0)
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x + 1] == 1)
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "purple";
                        }
                        else if (td_x == 10) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x - 1] == 0)
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x - 1] == 1)
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "purple";
                        }
                        else {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                        }
                        break;
                    }

                    case 3: {
                        if (td_x + 2 <= 10) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x + 1] == 0)
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x + 2] == 0)
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x + 1] == 1)
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x + 2] == 1)
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "purple";
                        }
                        else if (td_x == 9) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x - 1] == 0)
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x + 1] == 0)
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x - 1] == 1)
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x + 1] == 1)
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "purple";
                        }
                        else if (td_x == 10) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x - 1] == 0)
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x - 2] == 0)
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x - 1] == 1)
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x - 2] == 1)
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "purple";
                        }
                        else {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                        }
                        break;
                    }
                    case 4: {
                        if (td_x + 3 <= 10) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x + 1] == 0)
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x + 2] == 0)
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x + 3] == 0)
                                document.getElementById((td_x + 3) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x + 1] == 1)
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x + 2] == 1)
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x + 3] == 1)
                                document.getElementById((td_x + 3) + "_" + (td_y)).style.backgroundColor = "purple";
                        }
                        else if (td_x == 8) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x - 1] == 0)
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x + 1] == 0)
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x + 2] == 0)
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x - 1] == 1)
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x + 1] == 1)
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x + 2] == 1)
                                document.getElementById((td_x + 2) + "_" + (td_y)).style.backgroundColor = "purple";
                        }
                        else if (td_x == 9) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x - 1] == 0)
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x + 1] == 0)
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x - 2] == 0)
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x - 1] == 1)
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x + 1] == 1)
                                document.getElementById((td_x + 1) + "_" + (td_y)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x - 2] == 1)
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "purple";
                        }
                        else if (td_x == 10) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x - 1] == 0)
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x - 2] == 0)
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x - 3] == 0)
                                document.getElementById((td_x - 3) + "_" + (td_y)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x - 1] == 1)
                                document.getElementById((td_x - 1) + "_" + (td_y)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x - 2] == 1)
                                document.getElementById((td_x - 2) + "_" + (td_y)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y][td_x - 3] == 1)
                                document.getElementById((td_x - 3) + "_" + (td_y)).style.backgroundColor = "purple";
                        }
                        else {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                        }
                        break;
                    }
                }
                break;
            case 1:
                switch (this.active_ship.childElementCount) {
                    case 1: {
                        if (this.cords_pl[td_y][td_x] == 0)
                            td.style.backgroundColor = "white";
                        if (this.cords_pl[td_y][td_x] == 1)
                            td.style.backgroundColor = "purple";
                        break;
                    }

                    case 2: {
                        if (td_y + 1 <= 10) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y + 1][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y + 1][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "purple";
                        }
                        else if (td_y == 10) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y - 1][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y - 1][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "purple";
                        }
                        else {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                        }

                        break;
                    }

                    case 3: {
                        if (td_y + 2 <= 10) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y + 1][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y + 2][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y + 1][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y + 2][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "purple";
                        }
                        else if (td_y == 9) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y - 1][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y + 1][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y - 1][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y + 1][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "purple";
                        }
                        else if (td_y == 10) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y - 1][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y - 2][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y - 1][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y - 2][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "purple";
                        }
                        else {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                        }

                        break;
                    }
                    case 4: {
                        if (td_y + 3 <= 10) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y + 1][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y + 2][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y + 3][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y + 3)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y + 1][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y + 2][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y + 3][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y + 3)).style.backgroundColor = "purple";
                        }
                        else if (td_y == 8) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y - 1][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y + 1][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y + 2][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y - 1][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y + 1][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y + 2][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y + 2)).style.backgroundColor = "purple";
                        }
                        else if (td_y == 9) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y - 1][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y + 1][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y - 2][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y - 1][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y + 1][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y + 1)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y - 2][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "purple";
                        }
                        else if (td_y == 10) {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y - 1][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y - 2][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y - 3][td_x] == 0)
                                document.getElementById((td_x) + "_" + (td_y - 3)).style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                            if (this.cords_pl[td_y - 1][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y - 1)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y - 2][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y - 2)).style.backgroundColor = "purple";
                            if (this.cords_pl[td_y - 3][td_x] == 1)
                                document.getElementById((td_x) + "_" + (td_y - 3)).style.backgroundColor = "purple";
                        }
                        else {
                            if (this.cords_pl[td_y][td_x] == 0)
                                td.style.backgroundColor = "white";
                            if (this.cords_pl[td_y][td_x] == 1)
                                td.style.backgroundColor = "purple";
                        }

                        break;
                    }
                }
                break;
        }
    }

    shipsHtml = (): void => {
        let order = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
        const main = document.getElementById('l_left') as HTMLElement;
        if (main) {
            let that = this;

            for (let i = 0; i < order.length; i++) {
                let table: HTMLElement = document.createElement("table");
                table.style.margin = 2 + 'px';
                main.appendChild(table);

                let tr: HTMLElement = document.createElement("tr");
                tr.addEventListener("click", function () {
                    tr.style.backgroundColor = "blue";
                    if (that.active_ship == null) {
                        that.active_ship = tr;
                    }
                    else {
                        that.active_ship.style.backgroundColor = "white";
                        that.active_ship = tr;
                    }
                    for (let i = 0; i < that.table_td.length; i++) {
                        that.table_td[i].addEventListener("click", that.positioning)
                        that.table_td[i].addEventListener("mouseover", that.predicting)
                        that.table_td[i].addEventListener("mouseleave", that.unpredicting)
                    }
                })
                if (i == 0) {
                    this.active_ship = tr;
                    tr.style.backgroundColor = "blue";
                    for (let ii = 0; ii < that.table_td.length; ii++) {
                        that.table_td[ii].addEventListener("click", that.positioning)
                        that.table_td[ii].addEventListener("mouseover", that.predicting)
                        that.table_td[ii].addEventListener("mouseleave", that.unpredicting)
                    }
                }
                table.appendChild(tr);
                for (let ii = 0; ii < order[i]; ii++) {
                    let td: HTMLElement = document.createElement("td");
                    tr.appendChild(td);
                }
                tr.addEventListener("mouseover", function () {
                    if (tr != that.active_ship)
                        tr.style.backgroundColor = "lightblue";
                })
                tr.addEventListener("mouseleave", function () {
                    if (tr != that.active_ship)
                        tr.style.backgroundColor = "white";
                })
            }

        }
    }
    htmlTable = (): void => {
        const main = document.getElementById('l_right') as HTMLElement;
        let that = this;
        if (main) {
            for (let i = 0; i < 12; i++) {
                this.cords_pl[i] = [];
                for (let ii = 0; ii < 12; ii++) {
                    this.cords_pl[i][ii] = 0;
                }
            }
            let table: HTMLElement = document.createElement("table");
            main.appendChild(table);
            for (let i = 1; i < 11; i++) {
                let tr: HTMLElement = document.createElement("tr");
                table.appendChild(tr);
                for (let ii = 1; ii < 11; ii++) {
                    let td: HTMLElement = document.createElement("td");
                    td.id = ii + "_" + i;
                    this.table_td.push(td)
                    tr.appendChild(td);
                }
            }
            const info = document.getElementById('d_info') as HTMLElement;
            info.innerHTML = "Ustaw wszystkie swoje statki na planszy";
        }
    }
}

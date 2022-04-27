
class GamePlayScene extends Scene {
    #currentCellRow = 0;
    #currentCellCol = 0;
    #goalCellIndex;
    #trCount = 10;
    #tdCount = 10;
    #$td;

    get #currentCellIndex() {
        return this.#currentCellRow * this.#trCount + this.#currentCellCol;
    }

    start() {
        this.#setupDom();
    }

    keydown(key) {
        const oldCurrentCellIndex = this.#currentCellIndex; 

        if (key === "h") {
            // 左
            if (0 < this.#currentCellCol && this.#currentCellCol <= this.#tdCount - 1) {
                this.#currentCellCol -= 1;
            }
        }
        else if (key === "j") {
            // 下
            if (0 <= this.#currentCellRow && this.#currentCellRow < this.#tdCount - 1) {
                this.#currentCellRow += 1;
            }
        }
        else if (key === "k") {
            // 上
            if (0 < this.#currentCellRow && this.#currentCellRow <= this.#tdCount - 1) {
                this.#currentCellRow -= 1;
            }
        }
        else if (key === "l") {
            // 右
            if (0 <= this.#currentCellCol && this.#currentCellCol < this.#tdCount - 1) {
                this.#currentCellCol += 1;
            }
        }
        else if (key === "Escape") {
            SceneManager.start(GameStartScene);
            return;
        }

        if (oldCurrentCellIndex === this.#currentCellIndex) {
            return;
        }

        this.#$td.eq(oldCurrentCellIndex).removeClass("current-cell");
        this.#$td.eq(this.#currentCellIndex).addClass("current-cell");

        if (this.#currentCellIndex === this.#goalCellIndex) {
            this.#initGoalCell();
        }
    }

    #setupDom() {
        this.$app.empty();
        
        this.$app.append(`
            <span>h: 左</span>
            <span style="margin-left: 12px;">j: 下</span>
            <span style="margin-left: 12px;">k: 上</span>
            <span style="margin-left: 12px;">l: 右</span>
            <span style="margin-left: 12px;">ESC: 終了</span>
            <br>
        `);

        const $table = $("<table></table>");

        for (let i = 0; i < this.#trCount; i++) {
            const $tr = $("<tr></tr>");
            for (let j = 0; j < this.#tdCount; j++) {
                $tr.append("<td></td>");
            }
            $table.append($tr);
        }

        this.$app.append($table);

        this.#$td = $("td");
        this.#$td.first().addClass("current-cell");

        this.#initGoalCell();
    }

    #initGoalCell() {
        if (this.#goalCellIndex !== undefined) {
            this.#$td.eq(this.#goalCellIndex).removeClass("goal-cell");
        }
        
        do {
            this.#goalCellIndex = Common.randomInt(this.#trCount * this.#tdCount);
        }
        while (this.#goalCellIndex === this.#currentCellIndex);

        this.#$td.eq(this.#goalCellIndex).addClass("goal-cell");
    }
}


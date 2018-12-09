
export class HeaderItem {
    selected: Boolean = false;
    path: String;
    name: String;
    id: Number;

    constructor(id: Number, name: String, path: String) {
        this.id = id;
        this.name = name;
        this.path = path;
    }
}

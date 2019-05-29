export class CarClass {
    private id: string;
    private fabricacion: string;
    private marca:       string;
    private maxspeed: number;
    private modelo:  string;
    private potencia:   number;



	constructor($id: string, $fabricacion: string, $marca:       string, $maxspeed: number, $modelo:  string, $potencia:   number) {
		this.id = $id;
		this.fabricacion = $fabricacion;
		this.marca = $marca;
		this.maxspeed = $maxspeed;
		this.modelo = $modelo;
		this.potencia = $potencia;
	}



    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Getter $fabricacion
     * @return {string}
     */
	public get $fabricacion(): string {
		return this.fabricacion;
	}

    /**
     * Getter $marca
     * @return {      string}
     */
	public get $marca():       string {
		return this.marca;
	}

    /**
     * Getter $maxspeed
     * @return {number}
     */
	public get $maxspeed(): number {
		return this.maxspeed;
	}

    /**
     * Getter $modelo
     * @return { string}
     */
	public get $modelo():  string {
		return this.modelo;
	}

    /**
     * Getter $potencia
     * @return {  number}
     */
	public get $potencia():   number {
		return this.potencia;
	}

    /**
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}

    /**
     * Setter $fabricacion
     * @param {string} value
     */
	public set $fabricacion(value: string) {
		this.fabricacion = value;
	}

    /**
     * Setter $marca
     * @param {      string} value
     */
	public set $marca(value:       string) {
		this.marca = value;
	}

    /**
     * Setter $maxspeed
     * @param {number} value
     */
	public set $maxspeed(value: number) {
		this.maxspeed = value;
	}

    /**
     * Setter $modelo
     * @param { string} value
     */
	public set $modelo(value:  string) {
		this.modelo = value;
	}

    /**
     * Setter $potencia
     * @param {  number} value
     */
	public set $potencia(value:   number) {
		this.potencia = value;
	}



}
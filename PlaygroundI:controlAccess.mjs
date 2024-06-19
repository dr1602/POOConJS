export class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  
    get name() {
      // Tu código aquí 👈
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      // Tu código aquí 👈
      const tipoDe = typeof nuevoNombrecito;

      if(tipoDe === 'string') {
        let title = nuevoNombrecito
            .split(' ')
            .map((w) =>
                w[0]?.toUpperCase() + w.substring(1)
            )
            .join(' ');
        this._name = title;
      }
    }
}
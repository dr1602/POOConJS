class Comment {
    constructor({
      content,
      studentName,
      studentRole = "estudiante",
    }) {
      this.content = content;
      this.studentName = studentName;
      this.studentRole = studentRole;
      this.likes = 0;
    }
  
    publicar() {
      const comentario = {
        studentName: this.studentName + " (" + this.studentRole + ")",
        likes: this.likes + " likes",
        content: this.content
      }
      return comentario
    }
  }

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    return comment.publicar();
  }
}

class TeacherStudent extends Student {
    // Tu código aquí 👈

    // Hacer que la clase TeacherStudent herede de Student
    constructor(
        props,
        // Agrega un propiedad de tipo Array llamada skills a la clase TeacherStudent
        skills = [],
    ) {
        super(props)
        this.skills = skills;
    }

    // Sobrescribir el método publicar Comentario dentro de TeacherStundent.

    publicarComentario(commentContent) {
        // El string debe verse de la siguiente manera "profesor de skill1, skill2".
        const role = `profesor de ${this.skills.join(',')}`;

        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: role,
        });
        return comment.publicar();
    }

}


  const skills = ["js", "python", "mongodb"]
  const props = {
    name: "Erik Ochoa",
    username: "elyager"
  }

  const profesor = new TeacherStudent(props, skills)
  profesor.publicarComentario('Mi primer comentario')

  console.log(profesor)

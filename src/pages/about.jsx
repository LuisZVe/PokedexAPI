import React from "react";

export const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Sobre Mí
        </h2>
        <p className="text-black-700 text-lg leading-relaxed mb-6">
          Soy Pedro Luis Zelaya Velasquez, un estudiante universitario de 4to
          año de la carrera de Ingeniería en Ciencias de la Computación. Me
          considero una persona con alta capacidad para aprender y aplicar mis
          conocimientos en el ámbito profesional. Durante mi formación académica, 
          he estado adquiriendo sólidos conocimientos en programación, desarrollo de software y 
          aplicando mis conocimientos electricos en el ambito tecnologico. Tengo habilidades tanto para
          trabajar en equipo como de manera independiente, adaptándome a las
          necesidades del entorno.  Mi proposito es seguir creciendo profesionalmente,
          aplicando mis habilidades y conocimientos para contribuir al desarrollo
          de proyectos tecnológicos que generen impacto positivo en la sociedad.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Informacion de Contacto
          </h3>
          <ul className="space-y-4">
            <li>
              <p className="text-lg">
                <strong className="text-black">Teléfono:</strong>{" "}
                <span className="text-black-700">+504 3255-7895</span>
              </p>
            </li>
            <li>
              <p className="text-lg">
                <strong className="text-black">Correo Electrónico:</strong>{" "}
                <span className="text-black-700">zeronight1220@gmail.com</span>
              </p>
            </li>
            <li>
              <p className="text-lg">
                <strong className="text-black">Ubicación:</strong>{" "}
                <span className="text-black-700">El Paraíso, Honduras</span>
              </p>
            </li>
            <li>
              <p className="text-lg">
                <strong className="text-black">Red Social:</strong>{" "}
                <a
                  href="https://youtube.com/@zero-u3f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-500 hover:underline"
                >
                  https://youtube.com/@zero-u3f
                </a>
              </p>
            </li>
            <li>
              <p className="text-lg">
                <strong className="text-black">
                  ¿Quieres saber más? Dirígete a mi perfil detallado:
                </strong>
                {" "}
                <a
                  href="https://luiszve.github.io/Portafolio_II_Vite/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-500 hover:underline"
                >
                  https://luiszve.github.io/Portafolio_II_Vite/
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

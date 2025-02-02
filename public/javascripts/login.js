document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const warnings = document.getElementById("warnings");
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Evitar el envío del formulario por defecto
      warnings.innerHTML = ""; // Limpiar mensajes anteriores
  
      let valid = true;
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Validación de email
      if (!validateEmail(email)) {
        warnings.innerHTML += "<p>El correo no es válido.</p>";
        valid = false;
      }
  
      // Validación de contraseña
      if (password.length < 6) {
        warnings.innerHTML += "<p>La contraseña debe tener al menos 6 caracteres.</p>";
        valid = false;
      }
  
      // Si pasa las validaciones
      if (valid) {
        // Aquí puedes añadir la lógica de autenticación o redirección
        warnings.style.color = "green";
        warnings.innerHTML = "<p>Inicio de sesión exitoso. Redirigiendo...</p>";
        setTimeout(() => {
          window.location.href = "/index"; // Redirigir al home o dashboard
        }, 2000);
      }
    });
  
    // Función para validar formato de email
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  
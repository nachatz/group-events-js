using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$", ErrorMessage ="Password must contain at least: 1 uppercase, 1 lowercase, and 1 digit. Length: 4 - 8 characters")]
        public string Password { get; set; }

        [Required]
        public string Username { get; set; }
    }
}
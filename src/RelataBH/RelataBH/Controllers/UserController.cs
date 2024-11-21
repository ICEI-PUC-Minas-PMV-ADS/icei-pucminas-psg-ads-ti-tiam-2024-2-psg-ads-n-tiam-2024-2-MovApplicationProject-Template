﻿using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RelataBH.Authorization;
using RelataBH.Model;
using RelataBH.Service.Profile;
using RelataBH.Service.Profile.Domain;

namespace RelataBH.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController(IProfileService profileService) : ControllerBase
    {

        [HttpPost("profile")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<ProfileRequest>> Post([FromHeader] string Authorization)
        {
            try
            {
                var userEmail = AuthorizationManager.GetUserFromToken(token: Authorization);
                Profile appUser = await profileService.GetProfile(userEmail);
                return Ok(appUser);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}

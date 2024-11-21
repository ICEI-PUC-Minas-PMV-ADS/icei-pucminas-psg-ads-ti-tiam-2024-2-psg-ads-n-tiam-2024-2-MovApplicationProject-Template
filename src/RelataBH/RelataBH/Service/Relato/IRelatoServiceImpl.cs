﻿using Microsoft.EntityFrameworkCore;
using RelataBH.Database;
using RelataBH.Model.Relato;
using RelataBH.Service.Auth.Domain.Relato;
using RelataBH.Service.Relato.Mapper;
using System.Text;

namespace RelataBH.Service.Relato
{
    public class IRelatoServiceImpl(RelatoContext relatoContext) : IRelatoService
    {
        public async Task<IEnumerable<VW_RELATOS>> GetRelatos()
        {
            return await relatoContext
                .VW_RELATOS
                .ToListAsync();
        }

        public async Task<VW_RELATOS?> GetRelatoId(int Id)
        {
            return await relatoContext
                .VW_RELATOS
                .FirstOrDefaultAsync(x => x.IdRelato == Id);
        }

        public async Task<IEnumerable<VW_RELATOS>> GetRelatosPoint(string lat, string log)
        {
            var relatos = await relatoContext.VW_RELATOS
                .FromSqlRaw(BuildSql(lat, log, 2))
                .ToListAsync();

            return relatos;
        }

        public async Task<Model.Relato.Relato> SaveRelato(RelatoRequest relato)
        {
            var relatoSalvo = await relatoContext
                .Relatos
                .AddAsync(RelatoMapper.MapRequestToModel(relato));
            await relatoContext.SaveChangesAsync();
            return relatoSalvo.Entity;
        }

        public async Task<Model.Relato.Relato?> UpdateRelato(RelatoRequest relato)
        {
            var relatoEditado = await relatoContext.Relatos.FirstOrDefaultAsync(x => x.id == relato.Id);
            if(relatoEditado != null)
            {
                relatoEditado.latitude = relato.Latitude;
                relatoEditado.longitude = relato.Longitude;
                relatoEditado.endereco = relato.Endereco;
                relatoEditado.dsc = relato.DescricaoRelato;
                relatoEditado.titulo = relato.Titulo;
                relatoEditado.codIndicador = 50;
                relatoEditado.idUser = 100;
                relatoEditado.idBairro = 321;
            }
            await relatoContext.SaveChangesAsync();
            return relatoEditado;
        }

        public async Task<bool> DeleteRelato(int Id)
        {
            try
            {
                return await relatoContext
                    .Relatos
                    .Where(x => x.id == Id)
                    .ExecuteDeleteAsync() > 0;
            }
            catch
            {
                return false;
            }
        }

        private string BuildSql(string latitude, string longitude, int distanceInKM)
        {
            return new StringBuilder()
                .Append("SELECT * FROM [VW_RELATOS] AS [v] ")
                .Append($"WHERE [v].[POINT].STDistance(geography::Point({latitude}, {longitude}, 4326)) * 0.001E0 <= {distanceInKM}")
                .ToString()
            ;
        }
    }
}

﻿using RelataBH.Model.Relato;
using RelataBH.Service.Auth.Domain.Relato;

namespace RelataBH.Service.Relato.Mapper
{
    public class RelatoMapper
    {
        static public Model.Relato.Relato MapRequestToModel(RelatoRequest relato, List<string> images) => new()
        {
            latitude = relato.Latitude,
            longitude = relato.Longitude,
            endereco = relato.Endereco,
            createdAt = DateOnly.FromDateTime(DateTime.Now),
            dsc = relato.DescricaoRelato,
            titulo = relato.Titulo,
            codIndicador = relato.IdCategoria,
            idUser = relato.IdUser,
            idBairro = relato.IdBairro,
            images = images.Select(item => new RelatoImage() { Url = item }).ToList()
        };
    }
}

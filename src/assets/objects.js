//AGREGAR LINK LOGO

const bencineras = [
  {
    "name": "Copec",
    "logo": "http://api.cne.cl/brands/copec.svg"
  },
  {
    "name": "Lipigas",
    "logo": "http://api.cne.cl/brands/lipigas.svg"
  },
  {
    "name": "Petrobras",
    "logo": "http://api.cne.cl/brands/petrobras.svg"
  },
  {
    "name": "Shell",
    "logo": "http://api.cne.cl/brands/shell.svg"
  },
  {
    "name": "Uligas",
    "logo": "http://api.cne.cl/brands/uligas.svg"
  },
  {
    "name": "Abastible",
    "logo": "http://api.cne.cl/brands/abastible.svg"
  },
  {
    "name": "Sin bandera",
    "logo": "http://api.cne.cl/brands/sin bandera.svg"
  },
  {
    "name": "Autogasco",
    "logo": "http://api.cne.cl/brands/autogasco.svg"
  },
  {
    "name": "Apm",
    "logo": "http://api.cne.cl/brands/apm.svg"
  },
  {
    "name": "Viva combustibles",
    "logo": "http://api.cne.cl/brands/viva combustibles.svg"
  },
  {
    "name": "Petroval",
    "logo": "http://api.cne.cl/brands/petroval.svg"
  },
  {
    "name": "One",
    "logo": "http://api.cne.cl/brands/one.svg"
  },
  {
    "name": "Del sol combustibles",
    "logo": "http://api.cne.cl/brands/del sol combustibles.svg"
  },
  {
    "name": "Custom service",
    "logo": "http://api.cne.cl/brands/custom service.svg"
  },
  {
    "name": "Sesa",
    "logo": "http://api.cne.cl/brands/sesa.svg"
  },
  {
    "name": "Rafael letelier yañez y cia ltda",
    "logo": "http://api.cne.cl/brands/rafael letelier yañez y cia ltda.svg"
  },
  {
    "name": "Terpel",
    "logo": "http://api.cne.cl/brands/terpel.svg"
  },
  {
    "name": "Farcom",
    "logo": "http://api.cne.cl/brands/farcom.svg"
  },
  {
    "name": "Hola!",
    "logo": "http://api.cne.cl/brands/hola!.svg"
  },
  {
    "name": "Facaz",
    "logo": "http://api.cne.cl/brands/facaz.svg"
  },
  {
    "name": "Petrogal",
    "logo": "http://api.cne.cl/brands/petrogal.svg"
  },
  {
    "name": "Chilin",
    "logo": "http://api.cne.cl/brands/chilin.svg"
  },
  {
    "name": "Combustibles ortiz",
    "logo": "http://api.cne.cl/brands/combustibles ortiz.svg"
  },
  {
    "name": "Hn",
    "logo": "http://api.cne.cl/brands/hn.svg"
  },
  {
    "name": "Punto sur",
    "logo": "http://api.cne.cl/brands/punto sur.svg"
  },
  {
    "name": "Del solar",
    "logo": "http://api.cne.cl/brands/del solar.svg"
  },
  {
    "name": "Servicentro san miguel",
    "logo": "http://api.cne.cl/brands/servicentro san miguel.svg"
  },
  {
    "name": "Socorro",
    "logo": "http://api.cne.cl/brands/socorro.svg"
  },
  {
    "name": "Comercial maqui",
    "logo": "http://api.cne.cl/brands/comercial maqui.svg"
  },
  {
    "name": "Petrojac",
    "logo": "http://api.cne.cl/brands/petrojac.svg"
  },
  {
    "name": "Combustibles j.l.t.",
    "logo": "http://api.cne.cl/brands/combustibles j.l.t..svg"
  },
  {
    "name": "Aire",
    "logo": "http://api.cne.cl/brands/aire.svg"
  },
  {
    "name": "Selk",
    "logo": "http://api.cne.cl/brands/selk.svg"
  },
  {
    "name": "Att",
    "logo": "http://api.cne.cl/brands/att.svg"
  },
  {
    "name": "Hs combustibles",
    "logo": "http://api.cne.cl/brands/hs combustibles.svg"
  },
  {
    "name": "Navcar combustibles",
    "logo": "http://api.cne.cl/brands/navcar combustibles.svg"
  },
  {
    "name": "Doña lucina",
    "logo": "http://api.cne.cl/brands/doña lucina.svg"
  },
  {
    "name": "Mimbral",
    "logo": "http://api.cne.cl/brands/mimbral.svg"
  },
  {
    "name": "Combustibles alquihue",
    "logo": "http://api.cne.cl/brands/combustibles alquihue.svg"
  },
  {
    "name": "Petronext",
    "logo": "http://api.cne.cl/brands/petronext.svg"
  },
  {
    "name": "Las galaxias",
    "logo": "http://api.cne.cl/brands/las galaxias.svg"
  },
  {
    "name": "Redsur",
    "logo": "http://api.cne.cl/brands/redsur.svg"
  },
  {
    "name": "Ckr",
    "logo": "http://api.cne.cl/brands/ckr.svg"
  },
  {
    "name": "Infinia combustibles",
    "logo": "http://api.cne.cl/brands/infinia combustibles.svg"
  },
  {
    "name": "Servi centro todoservicio",
    "logo": "http://api.cne.cl/brands/servi centro todoservicio.svg"
  },
  {
    "name": "Gasolinera monte aguila",
    "logo": "http://api.cne.cl/brands/gasolinera monte aguila.svg"
  },
  {
    "name": "Newen",
    "logo": "http://api.cne.cl/brands/newen.svg"
  },
  {
    "name": "Coopeserau",
    "logo": "http://api.cne.cl/brands/coopeserau.svg"
  },
  {
    "name": "Suarez combustibles",
    "logo": "http://api.cne.cl/brands/suarez combustibles.svg"
  },
  {
    "name": "Servicentro leal",
    "logo": "http://api.cne.cl/brands/servicentro leal.svg"
  },
  {
    "name": "Cnc combustibles",
    "logo": "http://api.cne.cl/brands/cnc combustibles.svg"
  },
  {
    "name": "Flores",
    "logo": "http://api.cne.cl/brands/flores.svg"
  },
  {
    "name": "Segk servicentro",
    "logo": "http://api.cne.cl/brands/segk servicentro.svg"
  },
  {
    "name": "Surenergy",
    "logo": "http://api.cne.cl/brands/surenergy.svg"
  },
  {
    "name": "Transpetrol",
    "logo": "http://api.cne.cl/brands/transpetrol.svg"
  },
  {
    "name": "Combustibles jsp",
    "logo": "http://api.cne.cl/brands/combustibles jsp.svg"
  },
  {
    "name": "Speedway",
    "logo": "http://api.cne.cl/brands/speedway.svg"
  },
  {
    "name": "Delpa",
    "logo": "http://api.cne.cl/brands/delpa.svg"
  },
  {
    "name": "Jvl combustibles",
    "logo": "http://api.cne.cl/brands/jvl combustibles.svg"
  },
  {
    "name": "Ecco",
    "logo": "http://api.cne.cl/brands/ecco.svg"
  },
  {
    "name": "Enex",
    "logo": "http://api.cne.cl/brands/enex.svg"
  },
  {
    "name": "Combustibles endless.com",
    "logo": "http://api.cne.cl/brands/combustibles endless.com.svg"
  },
  {
    "name": "Jlc",
    "logo": "http://api.cne.cl/brands/jlc.svg"
  },
  {
    "name": "Sinhel",
    "logo": "http://api.cne.cl/brands/sinhel.svg"
  },
  {
    "name": "Combustibles jcd",
    "logo": "http://api.cne.cl/brands/combustibles jcd.svg"
  },
  {
    "name": "Bull energy",
    "logo": "http://api.cne.cl/brands/bull energy.svg"
  },
  {
    "name": "Combustibles amade",
    "logo": "http://api.cne.cl/brands/combustibles amade.svg"
  },
  {
    "name": "Combustibles josefita spa",
    "logo": "http://api.cne.cl/brands/combustibles josefita spa.svg"
  },
  {
    "name": "Combustible alhue",
    "logo": "http://api.cne.cl/brands/combustible alhue.svg"
  },
  {
    "name": "Cave",
    "logo": "http://api.cne.cl/brands/cave.svg"
  },
  {
    "name": "Adquim",
    "logo": "http://api.cne.cl/brands/adquim.svg"
  },
  {
    "name": "Baltolu",
    "logo": "http://api.cne.cl/brands/baltolu.svg"
  },
  {
    "name": "Estacion de servicio santa maria spa",
    "logo": "http://api.cne.cl/brands/estacion de servicio santa maria spa.svg"
  },
  {
    "name": "Orsil",
    "logo": "http://api.cne.cl/brands/orsil.svg"
  },
  {
    "name": "D'mar",
    "logo": "http://api.cne.cl/brands/d'mar.svg"
  },
  {
    "name": "Petrocamp",
    "logo": "http://api.cne.cl/brands/petrocamp.svg"
  },
  {
    "name": "Servicentro itata",
    "logo": "http://api.cne.cl/brands/servicentro itata.svg"
  },
  {
    "name": "Apex",
    "logo": "http://api.cne.cl/brands/apex.svg"
  }
]
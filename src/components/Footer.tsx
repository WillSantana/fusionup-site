import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F2] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-[#0066B3] mb-4">SocialMídia</h3>
            <p className="text-gray-600 mb-4">
              Transformamos ideias em experiências digitais que conectam marcas e pessoas.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#E6F0F7] flex items-center justify-center text-[#0066B3] hover:bg-[#0066B3] hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#E6F0F7] flex items-center justify-center text-[#0066B3] hover:bg-[#0066B3] hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#E6F0F7] flex items-center justify-center text-[#0066B3] hover:bg-[#0066B3] hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-[#0066B3] transition-colors">Home</a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-600 hover:text-[#0066B3] transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="/servicos" className="text-gray-600 hover:text-[#0066B3] transition-colors">Serviços</a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-600 hover:text-[#0066B3] transition-colors">Portfólio</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 hover:text-[#0066B3] transition-colors">Blog</a>
              </li>
              <li>
                <a href="/contato" className="text-gray-600 hover:text-[#0066B3] transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#0066B3] mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Rua Araçuai 491 - MG</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#0066B3] mr-2 flex-shrink-0" />
                <span className="text-gray-600">(11) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#0066B3] mr-2 flex-shrink-0" />
                <span className="text-gray-600">contato.fusionup@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Inscreva-se para receber nossas novidades e conteúdos exclusivos.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066B3] focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-[#0066B3] text-white px-4 py-2 rounded-r-md hover:bg-[#004D86] transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-200 mb-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SocialMídia. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="/privacidade" className="text-gray-600 text-sm hover:text-[#0066B3] transition-colors">
              Política de Privacidade
            </a>
            <a href="/termos" className="text-gray-600 text-sm hover:text-[#0066B3] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Check, X } from 'lucide-react';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface ScheduleDay {
  date: Date;
  slots: TimeSlot[];
}

const Scheduling = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar o carregamento durante o envio
  const [isSuccess, setIsSuccess] = useState(false);
  const [availableDays, setAvailableDays] = useState<ScheduleDay[]>([]);

  // Gerar dias disponíveis para o próximo mês
  useEffect(() => {
    const generateAvailableDays = () => {
      const days: ScheduleDay[] = [];
      const today = new Date();
      
      // Gerar 30 dias a partir de hoje
      for (let i = 1; i <= 30; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);
        
        // Pular finais de semana
        if (date.getDay() === 0 || date.getDay() === 6) continue;
        
        // Gerar horários disponíveis
        const slots: TimeSlot[] = [];
        for (let hour = 9; hour <= 17; hour++) {
          // Horários de hora em hora, exceto almoço (12-13)
          if (hour !== 12) {
            slots.push({
              id: `${date.toISOString().split('T')[0]}-${hour}`,
              time: `${hour}:00`,
              available: Math.random() > 0.3 // 70% de chance de estar disponível
            });
          }
        }
        
        days.push({ date, slots });
      }
      
      setAvailableDays(days);
    };
    
    generateAvailableDays();
  }, []);

  const handleOpenScheduling = () => {
    setIsOpen(true);
  };

  const handleCloseScheduling = () => {
    setIsOpen(false);
    // Reset form after animation completes
    setTimeout(() => {
      setCurrentStep(1);
      setSelectedService('');
      setSelectedDate(null);
      setSelectedTime('');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsSuccess(false);
    }, 500);
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio para API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setCurrentStep(4);
    }, 1500);
    
    // Exibir estado de carregamento enquanto isSubmitting for true
    if (isSubmitting) {
      return;
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  };

  const services = [
    { id: 'web', name: 'Desenvolvimento Web' },
    { id: 'social', name: 'Gestão de Mídias Sociais' },
    { id: 'design', name: 'Design Gráfico' },
    { id: 'marketing', name: 'Marketing Digital' }
  ];

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={handleOpenScheduling}
        className="fixed bottom-6 right-6 z-50 bg-[#0066B3] text-white rounded-full p-4 shadow-lg hover:bg-[#004D86] transition-all duration-300 transform hover:scale-110 flex items-center"
      >
        <Calendar className="h-6 w-6 mr-2" />
        <span className="font-medium">Agendar</span>
      </button>

      {/* Modal de Agendamento */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={handleCloseScheduling}
        ></div>
        
        <div
          className={`bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-auto transition-transform duration-500 transform ${
            isOpen ? 'scale-100' : 'scale-95'
          }`}
        >
          {/* Header */}
          <div className="bg-[#0066B3] text-white p-6 rounded-t-xl relative">
            <button
              onClick={handleCloseScheduling}
              className="absolute top-6 right-6 text-white hover:text-gray-200 transition-colors"
              title="Fechar agendamento"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold">Agende uma Consulta</h2>
            <p className="opacity-90">Escolha o melhor horário para conversarmos sobre seu projeto</p>
            
            {/* Progress Steps */}
            <div className="flex items-center justify-between mt-6 max-w-md mx-auto">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep >= step
                        ? 'bg-white text-[#0066B3]'
                        : 'bg-white/30 text-white'
                    } transition-colors duration-300`}
                  >
                    {step}
                  </div>
                  <span className="text-xs mt-1 text-white/80">
                    {step === 1 && 'Serviço'}
                    {step === 2 && 'Data/Hora'}
                    {step === 3 && 'Dados'}
                    {step === 4 && 'Confirmação'}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Step 1: Escolha do Serviço */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Selecione o Serviço</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                        selectedService === service.id
                          ? 'border-[#0066B3] bg-[#E6F0F7] shadow-md'
                          : 'border-gray-200 hover:border-[#4D9FD6] hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                            selectedService === service.id
                              ? 'border-[#0066B3] bg-[#0066B3]'
                              : 'border-gray-300'
                          }`}
                        >
                          {selectedService === service.id && (
                            <Check className="h-3 w-3 text-white" />
                          )}
                        </div>
                        <span className="font-medium text-gray-800">{service.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Step 2: Escolha da Data e Hora */}
            {currentStep === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Selecione a Data e Hora</h3>
                
                {/* Calendar View */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Datas Disponíveis:</h4>
                  <div className="flex flex-wrap gap-2">
                    {availableDays.slice(0, 10).map((day) => (
                      <button
                        key={day.date.toISOString()}
                        className={`px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedDate && selectedDate.toDateString() === day.date.toDateString()
                            ? 'bg-[#0066B3] text-white'
                            : 'bg-[#E6F0F7] text-gray-700 hover:bg-[#4D9FD6] hover:text-white'
                        }`}
                        onClick={() => setSelectedDate(day.date)}
                      >
                        {day.date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Time Slots */}
                {selectedDate && (
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Horários para {formatDate(selectedDate)}:</h4>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {availableDays
                        .find(day => day.date.toDateString() === selectedDate.toDateString())
                        ?.slots.map((slot) => (
                          <button
                            key={slot.id}
                            disabled={!slot.available}
                            className={`px-3 py-2 rounded-md text-sm transition-colors ${
                              selectedTime === slot.time && slot.available
                                ? 'bg-[#0066B3] text-white'
                                : slot.available
                                ? 'bg-[#E6F0F7] text-gray-700 hover:bg-[#4D9FD6] hover:text-white'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                            onClick={() => slot.available && setSelectedTime(slot.time)}
                          >
                            <div className="flex items-center justify-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {slot.time}
                            </div>
                          </button>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Step 3: Informações de Contato */}
            {currentStep === 3 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Suas Informações</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Nome Completo</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0066B3] focus:border-transparent"
                          placeholder="Seu nome"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">E-mail</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0066B3] focus:border-transparent"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Telefone</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0066B3] focus:border-transparent"
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Mensagem (opcional)</label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0066B3] focus:border-transparent"
                        placeholder="Detalhes sobre seu projeto ou dúvidas..."
                        rows={4}
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            )}
            
            {/* Step 4: Confirmação */}
            {currentStep === 4 && (
              <div className="animate-fade-in text-center py-6">
                {isSuccess ? (
                  <>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Agendamento Confirmado!</h3>
                    <p className="text-gray-600 mb-6">
                      Enviamos um e-mail de confirmação para <span className="font-medium">{email}</span> com todos os detalhes.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 max-w-md mx-auto mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Serviço:</span>
                        <span className="font-medium text-gray-800">
                          {services.find(s => s.id === selectedService)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Data:</span>
                        <span className="font-medium text-gray-800">
                          {selectedDate && formatDate(selectedDate)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Horário:</span>
                        <span className="font-medium text-gray-800">{selectedTime}</span>
                      </div>
                    </div>
                    <button
                      onClick={handleCloseScheduling}
                      className="bg-[#0066B3] text-white px-6 py-2 rounded-md hover:bg-[#004D86] transition-colors"
                    >
                      Fechar
                    </button>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 mx-auto mb-4 relative">
                      <div className="w-full h-full border-4 border-[#E6F0F7] border-t-[#0066B3] rounded-full animate-spin"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Processando seu agendamento...</h3>
                    <p className="text-gray-600">Isso levará apenas alguns segundos.</p>
                  </>
                )}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {currentStep < 4 && (
            <div className="bg-gray-50 p-6 rounded-b-xl flex justify-between">
              <button
                onClick={currentStep === 1 ? handleCloseScheduling : handlePrevStep}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {currentStep === 1 ? 'Cancelar' : 'Voltar'}
              </button>
              <button
                onClick={currentStep === 3 ? handleSubmit : handleNextStep}
                disabled={
                  (currentStep === 1 && !selectedService) ||
                  (currentStep === 2 && (!selectedDate || !selectedTime)) ||
                  (currentStep === 3 && (!name || !email || !phone))
                }
                className={`px-6 py-2 rounded-md text-white transition-colors ${
                  ((currentStep === 1 && !selectedService) ||
                  (currentStep === 2 && (!selectedDate || !selectedTime)) ||
                  (currentStep === 3 && (!name || !email || !phone)))
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#0066B3] hover:bg-[#004D86]'
                }`}
              >
                {currentStep === 3 ? 'Confirmar Agendamento' : 'Continuar'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Scheduling;

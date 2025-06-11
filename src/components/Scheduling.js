import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Check, X } from 'lucide-react';
const Scheduling = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedService, setSelectedService] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar o carregamento durante o envio
    const [isSuccess, setIsSuccess] = useState(false);
    const [availableDays, setAvailableDays] = useState([]);
    // Gerar dias disponíveis para o próximo mês
    useEffect(() => {
        const generateAvailableDays = () => {
            const days = [];
            const today = new Date();
            // Gerar 30 dias a partir de hoje
            for (let i = 1; i <= 30; i++) {
                const date = new Date();
                date.setDate(today.getDate() + i);
                // Pular finais de semana
                if (date.getDay() === 0 || date.getDay() === 6)
                    continue;
                // Gerar horários disponíveis
                const slots = [];
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
    const handleSubmit = (e) => {
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
    const formatDate = (date) => {
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
    return (_jsxs(_Fragment, { children: [_jsxs("button", { onClick: handleOpenScheduling, className: "fixed bottom-6 right-6 z-50 bg-[#0066B3] text-white rounded-full p-4 shadow-lg hover:bg-[#004D86] transition-all duration-300 transform hover:scale-110 flex items-center", children: [_jsx(Calendar, { className: "h-6 w-6 mr-2" }), _jsx("span", { className: "font-medium", children: "Agendar" })] }), _jsxs("div", { className: `fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`, children: [_jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50", onClick: handleCloseScheduling }), _jsxs("div", { className: `bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-auto transition-transform duration-500 transform ${isOpen ? 'scale-100' : 'scale-95'}`, children: [_jsxs("div", { className: "bg-[#0066B3] text-white p-6 rounded-t-xl relative", children: [_jsx("button", { onClick: handleCloseScheduling, className: "absolute top-6 right-6 text-white hover:text-gray-200 transition-colors", title: "Fechar agendamento", children: _jsx(X, { className: "h-6 w-6" }) }), _jsx("h2", { className: "text-2xl font-bold", children: "Agende uma Consulta" }), _jsx("p", { className: "opacity-90", children: "Escolha o melhor hor\u00E1rio para conversarmos sobre seu projeto" }), _jsx("div", { className: "flex items-center justify-between mt-6 max-w-md mx-auto", children: [1, 2, 3, 4].map((step) => (_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= step
                                                        ? 'bg-white text-[#0066B3]'
                                                        : 'bg-white/30 text-white'} transition-colors duration-300`, children: step }), _jsxs("span", { className: "text-xs mt-1 text-white/80", children: [step === 1 && 'Serviço', step === 2 && 'Data/Hora', step === 3 && 'Dados', step === 4 && 'Confirmação'] })] }, step))) })] }), _jsxs("div", { className: "p-6", children: [currentStep === 1 && (_jsxs("div", { className: "animate-fade-in", children: [_jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "Selecione o Servi\u00E7o" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: services.map((service) => (_jsx("div", { className: `border rounded-lg p-4 cursor-pointer transition-all duration-300 ${selectedService === service.id
                                                        ? 'border-[#0066B3] bg-[#E6F0F7] shadow-md'
                                                        : 'border-gray-200 hover:border-[#4D9FD6] hover:bg-gray-50'}`, onClick: () => setSelectedService(service.id), children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedService === service.id
                                                                    ? 'border-[#0066B3] bg-[#0066B3]'
                                                                    : 'border-gray-300'}`, children: selectedService === service.id && (_jsx(Check, { className: "h-3 w-3 text-white" })) }), _jsx("span", { className: "font-medium text-gray-800", children: service.name })] }) }, service.id))) })] })), currentStep === 2 && (_jsxs("div", { className: "animate-fade-in", children: [_jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "Selecione a Data e Hora" }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "font-medium text-gray-700 mb-2", children: "Datas Dispon\u00EDveis:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: availableDays.slice(0, 10).map((day) => (_jsx("button", { className: `px-3 py-2 rounded-md text-sm transition-colors ${selectedDate && selectedDate.toDateString() === day.date.toDateString()
                                                                ? 'bg-[#0066B3] text-white'
                                                                : 'bg-[#E6F0F7] text-gray-700 hover:bg-[#4D9FD6] hover:text-white'}`, onClick: () => setSelectedDate(day.date), children: day.date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' }) }, day.date.toISOString()))) })] }), selectedDate && (_jsxs("div", { children: [_jsxs("h4", { className: "font-medium text-gray-700 mb-2", children: ["Hor\u00E1rios para ", formatDate(selectedDate), ":"] }), _jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 gap-2", children: availableDays
                                                            .find(day => day.date.toDateString() === selectedDate.toDateString())
                                                            ?.slots.map((slot) => (_jsx("button", { disabled: !slot.available, className: `px-3 py-2 rounded-md text-sm transition-colors ${selectedTime === slot.time && slot.available
                                                                ? 'bg-[#0066B3] text-white'
                                                                : slot.available
                                                                    ? 'bg-[#E6F0F7] text-gray-700 hover:bg-[#4D9FD6] hover:text-white'
                                                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`, onClick: () => slot.available && setSelectedTime(slot.time), children: _jsxs("div", { className: "flex items-center justify-center", children: [_jsx(Clock, { className: "h-3 w-3 mr-1" }), slot.time] }) }, slot.id))) })] }))] })), currentStep === 3 && (_jsxs("div", { className: "animate-fade-in", children: [_jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "Suas Informa\u00E7\u00F5es" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 text-sm font-medium mb-1", children: "Nome Completo" }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(User, { className: "h-5 w-5 text-gray-400" }) }), _jsx("input", { type: "text", value: name, onChange: (e) => setName(e.target.value), className: "pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0066B3] focus:border-transparent", placeholder: "Seu nome", required: true })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 text-sm font-medium mb-1", children: "E-mail" }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(Mail, { className: "h-5 w-5 text-gray-400" }) }), _jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0066B3] focus:border-transparent", placeholder: "seu@email.com", required: true })] })] })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700 text-sm font-medium mb-1", children: "Telefone" }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(Phone, { className: "h-5 w-5 text-gray-400" }) }), _jsx("input", { type: "tel", value: phone, onChange: (e) => setPhone(e.target.value), className: "pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0066B3] focus:border-transparent", placeholder: "(00) 00000-0000", required: true })] })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700 text-sm font-medium mb-1", children: "Mensagem (opcional)" }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute top-3 left-3 pointer-events-none", children: _jsx(MessageSquare, { className: "h-5 w-5 text-gray-400" }) }), _jsx("textarea", { value: message, onChange: (e) => setMessage(e.target.value), className: "pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0066B3] focus:border-transparent", placeholder: "Detalhes sobre seu projeto ou d\u00FAvidas...", rows: 4 })] })] })] })] })), currentStep === 4 && (_jsx("div", { className: "animate-fade-in text-center py-6", children: isSuccess ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Check, { className: "h-8 w-8 text-green-600" }) }), _jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-2", children: "Agendamento Confirmado!" }), _jsxs("p", { className: "text-gray-600 mb-6", children: ["Enviamos um e-mail de confirma\u00E7\u00E3o para ", _jsx("span", { className: "font-medium", children: email }), " com todos os detalhes."] }), _jsxs("div", { className: "bg-gray-50 rounded-lg p-4 max-w-md mx-auto mb-6", children: [_jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("span", { className: "text-gray-600", children: "Servi\u00E7o:" }), _jsx("span", { className: "font-medium text-gray-800", children: services.find(s => s.id === selectedService)?.name })] }), _jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("span", { className: "text-gray-600", children: "Data:" }), _jsx("span", { className: "font-medium text-gray-800", children: selectedDate && formatDate(selectedDate) })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Hor\u00E1rio:" }), _jsx("span", { className: "font-medium text-gray-800", children: selectedTime })] })] }), _jsx("button", { onClick: handleCloseScheduling, className: "bg-[#0066B3] text-white px-6 py-2 rounded-md hover:bg-[#004D86] transition-colors", children: "Fechar" })] })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-16 h-16 mx-auto mb-4 relative", children: _jsx("div", { className: "w-full h-full border-4 border-[#E6F0F7] border-t-[#0066B3] rounded-full animate-spin" }) }), _jsx("h3", { className: "text-xl font-bold text-gray-800 mb-2", children: "Processando seu agendamento..." }), _jsx("p", { className: "text-gray-600", children: "Isso levar\u00E1 apenas alguns segundos." })] })) }))] }), currentStep < 4 && (_jsxs("div", { className: "bg-gray-50 p-6 rounded-b-xl flex justify-between", children: [_jsx("button", { onClick: currentStep === 1 ? handleCloseScheduling : handlePrevStep, className: "px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors", children: currentStep === 1 ? 'Cancelar' : 'Voltar' }), _jsx("button", { onClick: currentStep === 3 ? handleSubmit : handleNextStep, disabled: (currentStep === 1 && !selectedService) ||
                                            (currentStep === 2 && (!selectedDate || !selectedTime)) ||
                                            (currentStep === 3 && (!name || !email || !phone)), className: `px-6 py-2 rounded-md text-white transition-colors ${((currentStep === 1 && !selectedService) ||
                                            (currentStep === 2 && (!selectedDate || !selectedTime)) ||
                                            (currentStep === 3 && (!name || !email || !phone)))
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-[#0066B3] hover:bg-[#004D86]'}`, children: currentStep === 3 ? 'Confirmar Agendamento' : 'Continuar' })] }))] })] })] }));
};
export default Scheduling;

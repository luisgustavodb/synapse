import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { professionalsByCategory } from '../constants';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import { CheckCircleIcon } from '../components/icons/CheckCircleIcon';
import { ExclamationTriangleIcon } from '../components/icons/ExclamationTriangleIcon';

const pageVariants = {
  initial: { opacity: 0, x: '100%' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '100%' },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
} as const;

const ProfessionalDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    
    // Flatten the professionals from all categories and find the one with the matching id
    const professional = Object.values(professionalsByCategory).flat().find(p => p.id === id);

    const motionProps = {
        initial:"initial",
        animate:"in",
        exit:"out",
        variants:pageVariants,
        transition:pageTransition
    };

    if (!professional) {
        return (
            <motion.div {...motionProps} className="p-6 text-center h-full flex flex-col">
                 <header className="flex items-center p-4 border-b border-slate-200 flex-shrink-0">
                    <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-slate-200" aria-label="Voltar">
                        <ArrowLeftIcon className="h-6 w-6 text-slate-500" />
                    </button>
                    <h1 className="text-xl font-bold text-slate-800 mx-auto pr-8">Erro</h1>
                </header>
                <main className="flex-grow flex items-center justify-center">
                    <p>Profissional não encontrado.</p>
                </main>
            </motion.div>
        );
    }
    
    const isPaid = professional.paymentStatus === 'paid';

    return (
        <motion.div {...motionProps} className="h-full flex flex-col bg-slate-50">
            <header className="flex items-center p-4 border-b border-slate-200 flex-shrink-0 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
                <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-slate-200" aria-label="Voltar">
                    <ArrowLeftIcon className="h-6 w-6 text-slate-500" />
                </button>
                <h1 className="text-xl font-bold text-slate-800 mx-auto pr-8">Detalhes da Assinatura</h1>
            </header>
            <main className="flex-grow overflow-y-auto p-6 space-y-6">
                <div className="flex flex-col items-center text-center space-y-3">
                    <img src={professional.avatarUrl} alt={professional.name} className="w-24 h-24 rounded-full object-cover shadow-lg" />
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">{professional.name}</h2>
                        <p className="text-md text-slate-500">{professional.specialty}</p>
                    </div>
                </div>
                
                {isPaid ? (
                    <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg shadow-sm space-y-4">
                        <div className="flex items-start space-x-3">
                            <CheckCircleIcon className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg text-emerald-800">Mensalidade em Dia</h3>
                                <p className="text-sm text-emerald-600">Obrigado por manter seu plano com este especialista ativo. Sua próxima cobrança está agendada.</p>
                            </div>
                        </div>
                        <div className="text-sm bg-white p-3 rounded-lg">
                            <p><span className="font-semibold text-slate-600">Plano:</span> Acesso Mensal</p>
                            <p><span className="font-semibold text-slate-600">Próximo Vencimento:</span> 15 de Agosto, 2024</p>
                        </div>
                    </div>
                ) : (
                     <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg shadow-sm space-y-4">
                        <div className="flex items-start space-x-3">
                            <ExclamationTriangleIcon className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg text-amber-800">Pagamento Pendente</h3>
                                <p className="text-sm text-amber-600">Sua última mensalidade venceu. Por favor, regularize a situação para continuar utilizando os serviços deste especialista.</p>
                            </div>
                        </div>
                        <div className="text-sm bg-white p-3 rounded-lg border border-amber-200">
                             <p><span className="font-semibold text-slate-600">Plano:</span> Acesso Mensal</p>
                            <p><span className="font-semibold text-slate-600">Vencido em:</span> 15 de Julho, 2024</p>
                            <p><span className="font-semibold text-slate-600">Valor:</span> R$ 89,90</p>
                        </div>
                        <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl transition-colors">
                            Regularizar Pagamento
                        </button>
                    </div>
                )}
            </main>
        </motion.div>
    );
};

export default ProfessionalDetailsPage;

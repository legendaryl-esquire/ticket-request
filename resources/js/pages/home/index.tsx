import { AppContent } from '@/components/app-content';
import Galaxy from '@/components/Galaxy';
import { renderField } from './RenderField';
import Header from './Header';
import { useForm } from 'react-hook-form';
export type FieldType = {
    id: string;
    type:
        | 'number'
        | 'email'
        | 'radio'
        | 'file'
        | 'text'
        | 'date'
        | 'select'
        | 'checkbox';
    label: string;
    required: boolean;
    options?: string[];
};

const Home = () => {

    const fields: FieldType[] = [
        {
            id: 'new_number_field',
            type: 'number',
            label: 'New number field',
            required: false,
        },
        {
            id: 'new_email_field',
            type: 'email',
            label: 'New email field',
            required: false,
        },
        {
            id: 'new_date_field',
            type: 'date',
            label: 'New email field',
            required: false,
        },
        {
            id: 'new_radio_field',
            type: 'radio',
            label: 'New radio field',
            required: false,
            options: ['Option 1', 'Option 2', 'option 3', 'tae'],
        },
        {
            id: 'new_file_field',
            type: 'file',
            label: 'New file field',
            required: false,
        },
        {
            id: 'new_text_field',
            type: 'text',
            label: 'New text field',
            required: false,
        },
    ];
    return (
        <AppContent variant="header">
            <div className="relative h-screen w-full overflow-hidden bg-slate-950">
                <Galaxy
                    mouseRepulsion={false}
                    mouseInteraction
                    density={1.2}
                    glowIntensity={0.6}
                    saturation={0.9}
                    hueShift={200}
                    twinkleIntensity={0.5}
                    rotationSpeed={0.1}
                    repulsionStrength={5.5}
                    autoCenterRepulsion={0}
                    starSpeed={0.5}
                    speed={1}
                />
                <Header/>
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                    <h2 className="mb-6 scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight text-white first:mt-0">
                        Fueling Dreams
                    </h2>

                    <div className="relative z-10 mx-auto max-w-xl space-y-4 rounded-2xl border border-white/30 bg-white/20 p-6 shadow-lg backdrop-blur-md">
                        {fields.map((field) => (
                            <div key={field.id} className="space-y-1">
                                <label className="block text-sm font-medium text-white/90">
                                    {field.label}
                                </label>

                                {renderField(field)}
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </AppContent>
    );
};

export default Home;

#### Архитектура проекта

**Иерархия слоев:**
1) app
2) pages
3) widgets
4) features
5) entities
6) shared

**Правила:**
1) Вышележащие слои не могут использовать нижележащие.
2) В entities (слое бизнес-сущностей) мы выделяем группу связанных сущностей (подобно агрегату в DDD (Domain-Driven Design)).
3) В features кладем независимые блоки функциональности.
4) В widget мы указываем ui, который может использовать какую-либо feature и отвечает, за ее отображение. В widget мы объединяем логику работы в 1 изолированный и ни от чего независимый компонент со своей логикой. Widget может использовать контекст, предоставляемый feature. Если какая-либо логика напрашивается на добавление в widget - это не widget, a feature.
5) Используем page-sliced подход для того, чтобы в глобальном namespace были лишь те feature и widgets, которые переиспользуются на всех страницах.
6) Для решение проблемы cross-импортов внутри слайса, например, чтобы одни feature не использовали другие самостоятельные feature напрямую, можно использовать render-slot prop, который будет ожидать элемента, который необходимо отрендерить.

```text
app/
    ...
pages/
    main-page/
        ui/         
        local-widgets/
            customer-filter-group.ts (customer-filter feature + customer-sort feature + some ui)
        local-features/
            customer-filter/
                ui/
                hooks/
            customer-sort/
                ui/
                hooks/
        local-entities/ - ui only 
        index.ts - openapi (the page only)
                 
widgets/ - cross-page reusable, used only for uniting multiple features into one self-sufficient component with some additional ui and without any sufficient logic.
    ...
    index.ts - openapi
                    
features/ - cross-page reusable 
    auth-form/
        ui/
        api/
        lib/
        index.ts - openapi
        
entities/ - cross-page reusable,  (state, entity itself)
    customer/
        customer-store.ts
        customer-model.ts
        index.ts - openapi
    payment/
        payment-store.ts
        payment-model.ts
        index.ts - openapi

shared/
```


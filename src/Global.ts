class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;